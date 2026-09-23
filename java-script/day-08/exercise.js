let developer = {
    name: "Mohammad",
    age: 19,
    skill: "Smart contract"
};

let { name , age , skill } = developer;

console.log(name);
console.log(age);
console.log(skill);

function showDeveloper({name , skill}) {
    console.log(name);
    console.log(skill);
}

showDeveloper(developer);

let technologies = [
    "JavaScript",
    "Solidity",
    "Git",
    "Github",
    "Web3"
];

let [language , blockchain , versionControl] = technologies;

console.log(language);
console.log(blockchain);
console.log(versionControl);


let [language1 , , , , web3] = technologies;

console.log(language1);
console.log(web3);

let developer1 = {
    name1: "Mohammad",
    age1: 19,
    skill1: "Smart contract"
};

const {name1 , skill1} = developer1;

console.log(name1);
console.log(skill1);

const {name: developerName , age: developerAge} = developer;

console.log(developerName);
console.log(developerAge);


let developer2 = {
    name2: "Mohammad",
    age2: 19
};

const {name2 ,skill2 = "Not specified"} = developer2;

console.log(name2);
console.log(skill2);

let frontend = [
    "JavaScript",
    "HTML"
]

let blockchain1 = [
    "Solidity",
    "Web3"
]

let allTechnologies = [...frontend, ...blockchain1];

console.log(allTechnologies);


let seniorDeveloper = {
    ...developer2,
    skill: "Smart contract"
};

console.log(seniorDeveloper);

let developer3 = {
    name2: "Mohammad",
    age2: 19,
    skill: "JavaScript"
};

let updatedDeveloper = {
    ...developer3,
    skill: "Solidity"
};

console.log(updatedDeveloper);

let technologies = [
    "JavaScript",
    "Solidity",
    "Git"
];

let technologiesCopy = [...technologies];

technologiesCopy.push("Web3");

console.log(technologies);


console.log(technologiesCopy);


function calculateGas(...count) {
    
    let sum = 0;

    for (let i = 0; i < count.length; i++) {
       
        sum += count[i];
    }

    return sum;
}

console.log(calculateGas(100,200,300));















