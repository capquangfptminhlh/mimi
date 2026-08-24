import http from 'http';

async function testCheckout() {
    console.log("Starting checkout API test...");
    const url = 'http://localhost:3000/api/checkout'; // Guessed endpoint based on user request

    const payload = {
        cart: [
            { productId: "prod-1", quantity: 2 }
        ],
        customerInfo: {
            name: "Test User",
            phone: "0123456789"
        }
    };

    try {
        console.log(`Sending POST request to ${url} with payload:`, payload);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        console.log(`Response Status: ${response.status} ${response.statusText}`);
        
        const contentType = response.headers.get('content-type');
        let responseBody;
        if (contentType && contentType.includes('application/json')) {
            responseBody = await response.json();
            console.log("Response Body (JSON):", responseBody);
        } else {
            responseBody = await response.text();
            console.log("Response Body (Text):", responseBody.substring(0, 200) + (responseBody.length > 200 ? '...' : ''));
        }

        if (!response.ok) {
            console.error(`\n[!] Error: Checkout API returned non-OK status: ${response.status}.`);
            console.error(`[!] Bug/Observation: The application appears to be a client-side only React SPA (Vite) without a backend API at this endpoint. Client-side simulation is used for checkout instead.`);
        } else {
            console.log("\n[+] Success: Checkout API request succeeded.");
        }
    } catch (error) {
        console.error("\n[!] Exception during fetch:", error.message);
        console.error("[!] Bug/Error: Is the server running on http://localhost:3000? Could not connect.");
    }
}

testCheckout();
