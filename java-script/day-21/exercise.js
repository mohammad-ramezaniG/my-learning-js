const developers = ["Mohammad", "Ali", "Narges"];

const [firstDeveloper , secondDeveloper , thirdDeveloper] = developers;

const developers1 = ["Mohammad", "Ali", "Narges"];

const [firstDeveloper1, , thirdDeveloper1] = developers1;

const developers2 = ["Mohammad", "Ali", "Narges"];

const [firstDeveloper2, secondDeveloper2 = "Unknown"] = developers2;

let first = "Mohammad";
let second = "Ali";

[first, second] = [second, first];

console.log(first);
console.log(second);

const developer3 = {
    name: "Mohammad",
    age: 20,
    skill: "Solidity"
};

const {age , name} = developer3
console.log(age);
console.log(name);

const developer4 = {
    name: "Mohammad",
    age: 20
};

const { name: developerName } = developer4;

console.log(developerName);

const developer5 = {
    name5: "Mohammad",
    age5: 20
};

const {name5 , skill5 = "Unknown"} = developer5

console.log(name5);
console.log(skill5);

const developer6 = {
    name6: "Narges",
    wallet6: {
        address6: "0x123ABC",
        network6: "Ethereum"
    }
};

const {name6 , wallet6: {address6 , network6}} = developer6;

console.log(name6);
console.log(address6);
console.log(network6);


const developer7 = {
    name7: "Mohammad",
    age7: 20,
    skill7: "Solidity",
    experience7: 2
};

const { name7, skill7 , ...otherInfo7 } = developer7;

function showDeveloper({ name, experience }) {
    console.log(name);
    console.log(experience);
};
showDeveloper({
    name: "Mohammad",
    skill: "Solidity",
    experience: 2
})

function checkDeveloper({name , age = 0}) {
    console.log(name);
    console.log(age);  
};

checkDeveloper({
  name: "Ali",
  skill: "Solidity"
})

function getDeveloper() {
    return {
        name: "Ali",
        age: 21,
        skill: "JavaScript"
    };
};

const {name , skill } = getDeveloper();


