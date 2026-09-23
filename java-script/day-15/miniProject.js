async function apiRequest(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

    return data;
}

async function developerDashboard() {
    try {
        const results = await Promise.allSettled([
        apiRequest("https://jsonplaceholder.typicode.com/users/1" , {
            headers: {
                "Authorization": "Bearer fake-token-123"
            }
        }),
        apiRequest("https://jsonplaceholder.typicode.com/users/999" , {
            headers: {
                "Authorization": "Bearer fake-token-123"
            }
        }),
        apiRequest("https://jsonplaceholder.typicode.com/users/2" , {
            headers: {
                "Authorization": "Bearer fake-token-123"
            }
        })
    ]);
    for (const result of results) {
        if (result.status === "fulfilled") {
            console.log(`
                Name: ${result.value.name}
                UserName: ${result.value.username}
                Email: ${result.value.email}
                Status: Online
                `);
        }else {
            console.log(`
                User request failed
                Status: Offline
                `);
        }
    }
    } catch (error) {
        console.log(error.message);
    }
}

developerDashboard();