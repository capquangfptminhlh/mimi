const http = require('http');
const https = require('https');
const url = require('url');

const PORT = Number(process.env.PORT || 3001);
const ZALO_BOT_TOKEN = (process.env.ZALO_BOT_TOKEN || '').trim();
const ZALO_CHAT_ID = (process.env.ZALO_CHAT_ID || '').trim();
const ZALO_API_URL = process.env.ZALO_API_URL || 'https://bot-api.zaloplatforms.com';

const ALLOWED_ORIGINS = new Set([
  'https://lumipet.vn',
  'https://www.lumipet.vn',
]);

// Hardened in-memory rate limiter with bounded map size (prevents OOM DoS)
const ipRequests = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 12;
const MAX_TRACKED_IPS = 5000;

function isRateLimited(ip) {
  const now = Date.now();
  if (ipRequests.size > MAX_TRACKED_IPS) {
    for (const [key, stamps] of ipRequests.entries()) {
      const fresh = stamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (fresh.length === 0) ipRequests.delete(key);
      else ipRequests.set(key, fresh);
    }
  }
  const records = (ipRequests.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (records.length >= RATE_LIMIT_MAX) {
    ipRequests.set(ip, records);
    return true;
  }
  records.push(now);
  ipRequests.set(ip, records);
  return false;
}

function sendToZalo(text) {
  return new Promise((resolve, reject) => {
    if (!ZALO_BOT_TOKEN || !ZALO_CHAT_ID) {
      return reject(new Error('Zalo server credentials not configured in environment'));
    }

    const postData = new URLSearchParams({
      chat_id: ZALO_CHAT_ID,
      text,
      parse_mode: 'markdown',
    }).toString();

    const targetUrl = new URL(`${ZALO_API_URL}/bot${ZALO_BOT_TOKEN}/sendMessage`);
    const req = https.request(
      targetUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
        },
        timeout: 8000,
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            resolve({ ok: res.statusCode === 200 });
          }
        });
      }
    );

    req.on('timeout', () => {
      req.destroy(new Error('Zalo API timeout'));
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const origin = String(req.headers.origin || '').trim();

  // Security headers on every API response
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Frame-Options', 'DENY');

  // Strict origin-only CORS (never wildcard '*')
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Forbidden origin' }));
      return;
    }
    res.writeHead(204);
    res.end();
    return;
  }

  // Minimal health check (never leaks chat IDs or internal state)
  if (parsed.pathname === '/api/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  // Zalo dispatch endpoint
  if (parsed.pathname === '/api/notify-zalo' && req.method === 'POST') {
    // Reject cross-site requests from untrusted domains
    const referer = String(req.headers.referer || '');
    const originAllowed = !origin || ALLOWED_ORIGINS.has(origin);
    const refererAllowed = !referer || referer.startsWith('https://lumipet.vn/') || referer.startsWith('https://www.lumipet.vn/');
    if (!originAllowed || !refererAllowed) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Forbidden origin' }));
      return;
    }

    const rawFwd = String(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown');
    const ip = rawFwd.split(',')[0].trim();

    if (isRateLimited(ip)) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau.' }));
      return;
    }

    let body = '';
    let tooLarge = false;
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 16384) {
        tooLarge = true;
        req.destroy();
      }
    });

    req.on('end', async () => {
      if (tooLarge) return;
      try {
        const payload = JSON.parse(body || '{}');

        // Honeypot anti-spam check
        if (payload._hp || payload.website) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true, dropped: true }));
          return;
        }

        const text = typeof payload.text === 'string' ? payload.text.trim() : '';
        if (text.length < 5 || text.length > 2000) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: 'Nội dung thông báo không hợp lệ' }));
          return;
        }

        await sendToZalo(text);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (err) {
        console.error('[API-ERROR]', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'Internal notification error' }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[LUMI-API] Hardened listener active on http://127.0.0.1:${PORT}`);
});
