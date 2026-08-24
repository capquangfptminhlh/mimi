import http from 'http';

const API_BASE = 'http://localhost:3000';

async function testApi() {
  console.log('Testing Pet Passport & Customer Lookup API...');
  let hasErrors = false;

  const testCases = [
    { name: 'Lookup by phone', path: '/api/customers?phone=0912345678' },
    { name: 'Lookup by phone (no api prefix)', path: '/customers?phone=0912345678' },
    { name: 'Passport lookup', path: '/api/passport?phone=0912345678' },
    { name: 'Passport lookup (no api prefix)', path: '/passport?phone=0912345678' },
    { name: 'Search endpoint', path: '/api/search?phone=0912345678' },
  ];

  for (const tc of testCases) {
    console.log(`\n--- Test: ${tc.name} ---`);
    const url = `${API_BASE}${tc.path}`;
    console.log(`GET ${url}`);
    try {
      const res = await fetch(url);
      console.log(`Status: ${res.status} ${res.statusText}`);
      
      const text = await res.text();
      let isJson = false;
      try {
        const json = JSON.parse(text);
        console.log('Response JSON:', JSON.stringify(json, null, 2).substring(0, 500) + (text.length > 500 ? '...' : ''));
        isJson = true;
      } catch (e) {
        console.log('Response (text):', text.substring(0, 200) + (text.length > 200 ? '...' : ''));
      }

      if (!res.ok) {
        hasErrors = true;
        console.error(`❌ Error on ${tc.name}: Status ${res.status}`);
      } else if (text.includes('<!DOCTYPE html>') || text.includes('<html')) {
        // If we get an HTML response from Vite dev server fallback, it's not a real API.
        hasErrors = true;
        console.error(`❌ Error on ${tc.name}: Received HTML instead of API response.`);
      } else {
        console.log(`✅ Success on ${tc.name}`);
      }
    } catch (e) {
      hasErrors = true;
      console.error(`❌ Request failed: ${e.message}`);
    }
  }

  if (hasErrors) {
    console.log('\n❌ Tests finished with errors.');
    process.exit(1);
  } else {
    console.log('\n✅ All tests passed!');
  }
}

testApi();
