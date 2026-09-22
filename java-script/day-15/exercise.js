const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const data = await response.json();
console.log(data);

async function getUser() {
   
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json();
    console.log(data.name);
    console.log(data.username);
    console.log(data.email);

}
getUser();


async function getUser2() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/useadasd");
        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log(data.name);
        console.log(data.email);

    } catch (error) {
        console.log(error.message);
    }
}

getUser2();


async function getUser3() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
        console.log(response.status);
    if (!response.ok) {
        throw new Error("Request failed");
    }
    const data = await response.json();
    console.log(data.name);
    } catch (error) {
        console.log(error.message);
    } 
}

async function creatUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users",{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            name: "Mohammad",
            username: "MohammadG",
            email: "mohammad@example.com"
            })
        });
        if (!response.ok) {
            throw new Error("Request failed");
            
        }
        console.log(response.status);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
creatUser();

async function getUser4() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
        console.log(response.status);
        if (!response.ok) {
            throw new Error("Request failed");
        }
        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.log(error.message);     
    }
}
async function creatUser4() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Mohammad",
                username: "RamezaniG",
                email: "mohammad@example.com"
            })
        });
        console.log(response.status);
        if (!response.ok) {
            throw new Error("Request failed");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
    
}
getUser4();
creatUser4();

async function updateUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Mohammad",
                username: "RamezaniG",
                email: "mohammad@example.com"
            })
        });
        console.log(response.status);
        if (!response.ok) {
                throw new Error("Request failed");
            }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
updateUser();

async function patchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "newemail@example.com"
            })
        });
        console.log(response.status);
        if (!response.ok) {
                throw new Error("Request failed");
            }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
patchUser();

async function deleteUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "DELETE",
        });
        console.log(response.status);
        if (!response.ok) {
                throw new Error("Request failed");
            }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
deleteUser();

async function fetchUser(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Request failed");
    }
    const data = await response.json();
    return data;
}

async function main() {
    try {
        const user = await fetchUser("https://jsonplaceholder.typicode.com/users/1");
        console.log(user.name);
        console.log(user.email);
    } catch (error) {
        console.log(error.message);
    }
}

main();


async function apiRequest(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

    return data;
}

async function main2() {
    try {
        const user = await apiRequest("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Mohammad",
            username: "GenesisDev",
            email: "genesis@example.com"
        })
        })
        console.log(user.name);
        console.log(user.email);
        
    } catch (error) {
        console.log(error.message);
    }
}

main2();

async function main3() {
    try {
        const user = await apiRequest("https://jsonplaceholder.typicode.com/users/1" , {
            method: "PATCH",
            headers: {
                "Content-Type": "application.json"
            },
            body : JSON.stringify({
                email: "newemail@example.com"
            })
        })
    } catch (error) {
        console.log(error.message);
    }
}
main3();

async function getDashboard() {

    try {
        const user = await Promise.all([
        apiRequest("https://jsonplaceholder.typicode.com/users/1"),
        apiRequest("https://jsonplaceholder.typicode.com/users/2"),
        apiRequest("https://jsonplaceholder.typicode.com/users/3")
    ]);

    console.log(user[0].name);
    console.log(user[1].name);
    console.log(user[2].name);
 
    } catch (error) {
        console.log(error.message);
    }
    
}

async function apiReques1(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

    return data;
}

async function getDashboard() {

    try {
        const users = await Promise.allSettled([
        apiRequest1("https://jsonplaceholder.typicode.com/users/1"),
        apiRequest1("https://jsonplaceholder.typicode.com/users/999"),
        apiRequest1("https://jsonplaceholder.typicode.com/users/3")
    ]);

    console.log(user[0].name);
    console.log(user[1].name);
    console.log(user[2].name);
 
    } catch (error) {
        console.log(error.message);
    }
    
}

getDashboard();

async function apiRequest2(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

    return data;
}

async function getDashboard1() {

    try {
        const users = await Promise.allSettled([
        apiRequest2("https://jsonplaceholder.typicode.com/users/1"),
        apiRequest2("https://jsonplaceholder.typicode.com/users/999"),
        apiRequest2("https://jsonplaceholder.typicode.com/users/3")
    ]);

        for (const user of users) {
            if (user.status ==="fulfilled") {
                console.log(user.value.name);
            }else {
                console.log("Request failed");
            }
        }
    } catch (error) {
        console.log(error.message);
    }
    
}

getDashboard1();

async function findUser() {
    try {
        const users = await apiRequest2("https://jsonplaceholder.typicode.com/users?username=Bret");
        console.log(users[0].name);
    } catch (error) {
        console.log(error.message);
    }
}
findUser();

async function findUser2() {
    try {
        const users = await apiRequest2("https://jsonplaceholder.typicode.com/users?username=Bret&_limit=1");
        console.log(users.name);
        console.log(users.email);
    } catch (error) {
        console.log(error.message);
    }
}
findUser2();

async function findUser3() {
    try {
        const params = new URLSearchParams({
            username: "Bret",
            _limit: 1
        });
        const url = `https://jsonplaceholder.typicode.com/users?${params}`
        const user = await apiRequest2(url);
        console.log(user[0].name );
        
    } catch (error) {
        console.log(error.message);
    }
}
findUser3();

async function getUserWithHeaders() {
    try {
        const  user = await apiRequest2("https://jsonplaceholder.typicode.com/users/1" , {
        method: "GET",
        headers: {
            "Authorization": "Bearer fake-token-123"
        },
        })
        console.log(user.name);
        console.log(user.email);
    } catch (error) {
        console.log(error.message);
    }
}

async function findUser4() {
    try {
        const params = new URLSearchParams({
        username: "Bret",
        _limit: 1
        });
        const url = `https://jsonplaceholder.typicode.com/users?${params}`;
        const users = await apiRequest2(url , {
        headers: {
            "Authorization": "Bearer fake-token-123"
        }
        });
        console.log(user[0].name);
        console.log(user[0].username);
        console.log(user[0].email);
    } catch (error) {
        console.log(error.message);
    }
}
findUser4();