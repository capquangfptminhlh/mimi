const http = require('http');
const https = require('https');
const url = require('url');

const PORT = process.env.PORT || 3001;
const ZALO_BOT_TOKEN = process.env.ZALO_BOT_TOKEN || '2488056338196260982:zEjZvnVEKAtHTnEcXwwntFvamkXZEnUnLJqtwpBiYQuhZpLvNZtRukCgBiUCSFuA';
const ZALO_CHAT_ID = process.env.ZALO_CHAT_ID || '6e15121ea4544d0a1445';
const ZALO_API_URL = process.env.ZALO_API_URL || 'https://bot-api.zaloplatforms.com';

// Simple in-memory rate limiter: max 15 requests per 10 mins per IP
const ipRequests = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 15;

function isRateLimited(ip) {
  const now = Date.now();
  const records = (ipRequests.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (records.length >= RATE_LIMIT_MAX) {
    return true;
  }
  records.push(now);
  ipRequests.set(ip, records);
  return false;
}

function sendToZalo(text) {
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      chat_id: ZALO_CHAT_ID,
      text: text,
      parse_mode: 'markdown'
    }).toString();

    const targetUrl = new URL(`${ZALO_API_URL}/bot${ZALO_BOT_TOKEN}/sendMessage`);
    const req = https.request(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 8000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve({ ok: res.statusCode === 200, raw: data });
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check
  if (parsed.pathname === '/api/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', time: new Date().toISOString() }));
    return;
  }

  // Zalo dispatch endpoint
  if (parsed.pathname === '/api/notify-zalo' && req.method === 'POST') {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

    if (isRateLimited(ip)) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Quá nhiều yêu cầu. Vui lòng thử lại sau.' }));
      return;
    }

    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 50000) {
        req.destroy();
      }
    });

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);

        // Honeypot anti-spam check
        if (payload._hp || payload.website) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true, dropped: true }));
          return;
        }

        const text = payload.text || '';
        if (!text || text.length < 5) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false, error: 'Thiếu nội dung thông báo' }));
          return;
        }

        const zaloRes = await sendToZalo(text);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, result: zaloRes }));
      } catch (err) {
        console.error('[API-ERROR]', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[LUMI-API] Listening on http://127.0.0.1:${PORT}`);
});
