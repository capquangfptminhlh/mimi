const BASE_URL = 'http://localhost:3000';
const TOKEN = 'lumi-demo-admin';

const headers = {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
};

async function testEndpoint(name, path) {
    console.log(`\nTesting ${name}...`);
    console.log(`GET ${BASE_URL}${path}`);
    
    try {
        const res = await fetch(`${BASE_URL}${path}`, { headers });
        console.log(`Status: ${res.status} ${res.statusText}`);
        
        if (!res.ok) {
            console.error(`❌ Error fetching ${name}`);
            try {
                const text = await res.text();
                console.error(`Response Body: ${text.substring(0, 500)}`);
            } catch (e) {
                console.error('Could not read response body.');
            }
            return false;
        }
        
        const data = await res.json();
        console.log(`✅ Success! Received ${Array.isArray(data) ? data.length + ' items' : 'data object'}.`);
        return true;
    } catch (error) {
        console.error(`❌ Request failed: ${error.message}`);
        return false;
    }
}

async function runTests() {
    console.log('=== Admin Command Center API Tests ===');
    console.log(`Target URL: ${BASE_URL}`);
    console.log(`Using Token: ${TOKEN}\n`);

    const results = [];
    
    // Test endpoints (common patterns)
    results.push(await testEndpoint('Bookings API', '/api/admin/bookings'));
    results.push(await testEndpoint('Orders API', '/api/admin/orders'));
    results.push(await testEndpoint('Low Stock API', '/api/admin/inventory/low-stock'));
    
    // Try alternative paths if previous might fail
    results.push(await testEndpoint('Alternative Low Stock API', '/api/admin/low-stock'));
    results.push(await testEndpoint('Alternative Bookings API', '/api/bookings'));

    const passed = results.filter(r => r).length;
    console.log(`\n=== Test Summary ===`);
    console.log(`Total Endpoints Tested: ${results.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${results.length - passed}`);
    
    if (passed === 0) {
        console.log('\nAll endpoints failed. Ensure the server is running on port 3000 and the API routes are correct.');
    }
}

runTests();
