let developer = {
    
    name: "Mohammad",
    age: 19,
    skill: "Smart contract"
};

console.log(developer.name);

console.log(developer.age);

console.log(developer.skill);


let developer1 = {
    
    name: "Mohammad",
    age: 19,
    skill: "Smart contract"
};

developer1.age = 20;
developer1.skill = "AI";

console.log(developer1.age);

console.log(developer1.skill);


let developer2 = {
    name: "Mohammad",
    age: 19,
    skill: "Smart contract"
};

developer2.experience = 2;

console.log(developer2.experience);

delete developer2.experience;

console.log(developer2.experience);


let developer3 = {
    name: "Mohammad",
    age: 19,
    hasGit: true,
    hasGitHub: true
};

if (developer3.age >= 18 && developer3.hasGit && developer3.hasGitHub) {
    
    console.log("Ready for next stage");
    
} else {

    console.log("Not ready");
    
}


let developers = [

    {
        name: "Mohammad",
        age: 19,
        skill: "Smart contract"
    },
    {
        name: "Ali",
        age: 21,
        skill: "Solidity"
    },
    {
        name: "Narges",
        age: 17,
        skill: "DeFi"
    }

]

for (let i = 0; i < developers.length; i++) {

    if (developers[i].age > 18) {
        
        console.log(`${developers[i].name} - ${developers[i].skill}`);
        
    }
    
}

