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
