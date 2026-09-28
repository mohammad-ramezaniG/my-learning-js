async function api() {
    console.log("Fetching user from API....");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    const cache = {
        data: user,
        timestamp: Date.now()
    }
    localStorage.setItem("DeveloperCache" , JSON.stringify(cache))
    return user
}



async function getDeveloper() {
    try {
        const savedCache = localStorage.getItem("DeveloperCache");
        let developer;
        if (savedCache) {
            try {
                const objectedDeveloper = JSON.parse(savedCache);
                const age = Date.now() - objectedDeveloper.timestamp;
                const maxAge = 60 * 1000;
                if (age < maxAge) {
                    developer = objectedDeveloper.data;
                } else {
                    developer = await api();
                }
            } catch (error) {
                localStorage.removeItem("DeveloperCache");
                developer = await api()
            }
        } else {
            developer = await api();
        }
        console.log(developer.name);
        console.log("Username:", developer.username);
        console.log("Email:", developer.email);
    } catch (error) {
        console.log("Request failed");
    }
}
getDeveloper();