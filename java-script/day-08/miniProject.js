let developer = {
    name: "Mohammad",
    age: 19,
    skills: [
        "JavaScript",
        "Solidity"
    ]
};

function upgradeDeveloper({name , skills}, ...newSkills) {
    
    return {
        name: name,
        skills:[...skills, ...newSkills]
    };
}

let newDeveloper = upgradeDeveloper(developer, "Web3" , "Git" );

console.log(newDeveloper);


let developer1 = {
    name: "Mohammad",
    age: 19,
    skills: ["JavaScript" , "Solidity"]
};

function upgradeDeveloper({name , skills} , ...newSkills) {
    
    return {
        name: name,
        upgradedSkills: [
            ...skills,
            ...newSkills
        ]
    };

}

upgradeDeveloper(developer1 , "Web3" , "Git")

let call = upgradeDeveloper(developer1 , "Web3" , "Git");

console.log(call);
