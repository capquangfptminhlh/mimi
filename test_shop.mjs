import http from 'http';

const BASE_URL = 'http://localhost:3000';

function fetchJson(path) {
    return new Promise((resolve, reject) => {
        const req = http.get(`${BASE_URL}${path}`, (res) => {
            const { statusCode } = res;
            
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    const parsedData = rawData ? JSON.parse(rawData) : null;
                    resolve({ statusCode, data: parsedData });
                } catch (e) {
                    resolve({ statusCode, data: rawData, error: e.message });
                }
            });
        });
        
        req.on('error', (e) => {
            reject(e);
        });
    });
}

async function runTests() {
    console.log(`Starting API tests against ${BASE_URL}...`);
    let errors = [];

    // Common endpoints for catalog, product listing, and search
    const endpoints = [
        { name: 'Shop Categories', path: '/api/categories' },
        { name: 'Product Listing', path: '/api/products' },
        { name: 'Search API', path: '/api/products?search=dog' }
    ];

    for (const ep of endpoints) {
        console.log(`Testing ${ep.name} (${ep.path})...`);
        try {
            const result = await fetchJson(ep.path);
            if (result.statusCode !== 200) {
                console.error(`❌ [FAIL] ${ep.name}: Expected 200 OK, got ${result.statusCode}`);
                console.error(`   Response: ${JSON.stringify(result.data)}`);
                errors.push(`${ep.name} failed with status ${result.statusCode}`);
            } else {
                console.log(`✅ [PASS] ${ep.name} returned 200 OK`);
                if (result.data && Array.isArray(result.data) && result.data.length > 0) {
                    console.log(`   Found ${result.data.length} products.`);
                } else if (result.data && result.data.products && result.data.products.length > 0) {
                    console.log(`   Found ${result.data.products.length} products.`);
                } else if (result.data && result.data.data && Array.isArray(result.data.data)) {
                    console.log(`   Found ${result.data.data.length} products.`);
                } else if (result.data && result.data.items && Array.isArray(result.data.items)) {
                    console.log(`   Found ${result.data.items.length} products.`);
                } else {
                    console.warn(`⚠️ [WARN] ${ep.name} did not return expected product array. Received: ${JSON.stringify(result.data).substring(0, 100)}`);
                    errors.push(`${ep.name} returned unexpected data format.`);
                }
            }
        } catch (e) {
            console.error(`❌ [ERROR] ${ep.name} request failed: ${e.message}`);
            errors.push(`${ep.name} error: ${e.message}`);
        }
    }

    console.log('\n--- Test Summary ---');
    if (errors.length > 0) {
        console.log('Some tests failed or returned warnings:');
        errors.forEach(e => console.log(`- ${e}`));
        process.exit(1);
    } else {
        console.log('All tests passed successfully!');
        process.exit(0);
    }
}

runTests();
