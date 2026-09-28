localStorage.setItem("name" , "Mohammad");
const developer = localStorage.getItem("name");
console.log(developer);

const user = {
    name: "Mohammad",
    age: 19,
    country: "Iran"
};
const skills = ["JavaScript", "Solidity", "AI"];
localStorage.setItem("developer", JSON.stringify(user));

const saveDeveloper = localStorage.getItem("developer");

const developerObject = JSON.parse(saveDeveloper);

console.log(developerObject.name);
console.log(developerObject.country);

localStorage.setItem("skills" , JSON.stringify(skills));
const savedSkills = localStorage.getItem("skills");
const skillsArray = JSON.parse(savedSkills)
console.log(skillsArray[1]);


localStorage.setItem("name", "Mohammad");
localStorage.setItem("skill", "JavaScript");

localStorage.removeItem("skill");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("skill"));


async function saveUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    localStorage.setItem("user" , JSON.stringify(user));
    const savedUser = localStorage.getItem("user")
    const userObjected = JSON.parse(getUser);
    console.log(userObjected.name);
}
saveUser();


async function getUser() {
    const savedUser = localStorage.getItem("user1");

    if (savedUser) {
        const userObject =  JSON.parse(savedUser);
        console.log(userObject.name);
    } else {
        console.log("Fetching user from API...");
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        localStorage.setItem("user1" , JSON.stringify(user));
        const savedUser = localStorage.getItem("user1");
        const userObjected = JSON.parse(savedUser);
        console.log(userObjected.name); 
    }
}
getUser();

async function saveUserWithTimestamp() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    const cache = {
        data: user,
        timestamp: Date.now()
    };
    localStorage.setItem("cachedUser" , JSON.stringify(cache));
    const savedCache = localStorage.getItem("cachedUser");
    const cachedObject = JSON.parse(savedCache);
    console.log(cachedObject.data.name);
    console.log(cachedObject.timestamp);
}
saveUserWithTimestamp();

async function isCacheValid() {
    const savedCache = localStorage.getItem("cachedUser");
    const cachedObject = JSON.parse(savedCache);
    const age = Date.now() - cachedObject.timestamp;
    const maxAge = 60 * 1000;
    if (age < maxAge) {
        console.log("Cache is valid");
    } else {
        console.log("Cache expired");
    }
}

async function fetchAndCacheUser() {
    console.log("Fetching user from API....");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await response.json();
            const cache = {
                data: user,
                timestamp: Date.now()
            };
            localStorage.setItem("cachedUser" , JSON.stringify(cache))
            return user;
}


async function getUser1() {
    try {
        const savedCache = localStorage.getItem("cachedUser");
        let user;
        if (savedCache) {
            try {
                const userObjected = JSON.parse(savedCache);
                const age = Date.now() - userObjected.timestamp;
                const maxAge = 60 * 1000
                if (age < maxAge) {
                    user = userObjected.data;
                } else {
                    user = await fetchAndCacheUser();   
                }
            } catch (error) {
                localStorage.removeItem("cachedUser");
                user = await fetchAndCacheUser();
            }
        } else {
            user = await fetchAndCacheUser();
        }
        console.log(user.name);
    } catch (error) {
        console.log("Request failed");
    } 
}
getUser1();