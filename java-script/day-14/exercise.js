console.log("Start");

setTimeout(() => {
    console.log("Middle");
}, 2000);

console.log("End");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 3000);

setTimeout(() => {
    console.log("C");
}, 1000);

console.log("D");

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

setTimeout(first, 2000);
setTimeout(second, 1000);

console.log("Done");


console.log("1"); // فوری

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3"); // فوری

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5"); // فوری


const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then((result) => {
    console.log(result);
});

console.log(promise);

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received");
    }, 2000);
});

promise1.then((result) => {
    console.log(result);
});

console.log("Waiting...");


const promise2 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise2
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

const user = {
    name: "Mohammad",
    age: 19
};

const promise = new Promise((resolve, reject) => {

    if (user.age >= 18) {
        resolve(user);
    } else {
        reject("User is not adult");
    }

});

promise
.then((result) => {
    console.log(result.name);
    console.log(result.age);   
})
.catch((error) => {
    console.log(error);
});


async function getName() {
    return "Mohammad";
}

getName().then((result) => {
    console.log(result);
});

async function showName() {

    const result = await getName();

    console.log(result);
}

showName();

function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("User received");
        }, 3000);

    });
}

async function showUser() {
    const result = await getUser();
    console.log(result);
        
}

showUser();

function getUser1() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject("User not found");
        }, 3000);

    });
}

async function showUser1() {

    try {
        const result = await getUser1();

        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

showUser1();


function getUser2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User received");
        }, 2000);
    });
}

function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts received");
        }, 1000);
    });
}

function getComment() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Comment received");
        }, 3000)
    })
}

async function loadData() {

const results = await Promise.all([
        getUser2(),
        getPosts(),
        getComment()
    ]);

    console.log(results);
}

loadData();


function getUser3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User received");
        }, 1000);
    });
}

function getPosts3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Posts failed");
        }, 2000);
    });
}

function getComments3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comments received");
        }, 3000);
    });
}

async function loadData3() {

    try {
        const result = await Promise.all([
            getUser3(),
            getPosts3(),
            getComments3()

        ]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

loadData3();


function getUser4() {
    return Promise.resolve("User received");
}
function getPosts4() {
    return Promise.reject("Posts failed");
}
function getComments4() {
    return Promise.resolve("Comment received");
}

async function loadData4() {

    try {
        const result = await Promise.all([
            getUser3(),
            getPosts3(),
            getComments3()

        ]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}
loadData4();
const names = ["Mohammad", "Ali", "Narges"];

for (const name of names) {
    console.log(name);
    
}

function getFastData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fast data");
        }, 1000);
    });
}

function getSlowData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Slow data");
        }, 3000);
    });
}

async function getData() {
    const result = await Promise.race([
        getSlowData(),
        getFastData()
    ]);
    console.log(result);
    
}

getData();



function server1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server 1 failed");
        }, 1000);
    });
}

function server2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server 2 success");
        }, 2000);
    });
}

function server3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server 3 success");
        }, 3000);
    });
}

async function getServerData() {
    const result = await Promise.any([
        server1(),
        server2(),
        server3()
    ]);
    console.log(result);
    
}

getServerData();
