function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Mohammad",
                age: 19
            });
        }, 1000);
    });
}
function getProject() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "JavaScript Project",
                "Smart Contract Project"
            ]);           
        }, 2000);
    });
}

function getSkill() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Skills service unavailable");
        }, 1500);
    });
}

async function loadDashborsd() {
    const results = await Promise.allSettled([
        getProfile(),
        getSkill(),
        getProject()
    ]);
    for (const result of results) {
        if (result.status ==="fulfilled") {
            console.log(result.value);
        } else {
            console.log(result.reason);           
        }
    }
    
}

loadDashborsd();