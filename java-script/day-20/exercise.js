const skill = "Solidity";

console.log(skill.toUpperCase());
console.log(skill.toLowerCase());

const wallet = "   0x123ABC   ";

console.log(wallet.trim());

const wallet2 = "0x123ABCDEF";

console.log(wallet2.includes("0x"));
console.log(wallet2.includes("ETH"));
console.log(wallet2.startsWith("0x"));
console.log(wallet2.endsWith("DEF"));
console.log(wallet.slice(2, wallet2.length));

const skill2 = "JavaScript Developer";

console.log(skill2.replace("JavaScript" , "Solidity"));
console.log(skill2);

const text = "I love JavaScript";
console.log(text.replace("JavaScript" , "Solidity"));

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Python"];

const fullStack = [...frontend , ...backend];
console.log(fullStack);

const skills5 = ["JavaScript", "Solidity"];
const updatedSkills5 = [...skills5 , "Foundry"];

const developer7 = {
  name: "Mohammad",
  skill: "JavaScript"
};

const updatedDeveloper = {
    ...developer7,
    skill: "Solidity",
    experience: 2
};

function sum(...numbers) {
    console.log(numbers);
}
sum(10, 20, 30);
function showDevelopers(...developers) {
  console.log(developers);
}

showDevelopers("Mohammad", "Ali", "Narges");

function sumNumbers(...numbers) {
    return numbers.reduce((total , number) => {
      return total + numbers;
    }, 0)
}

console.log(sumNumbers(10, 20, 30, 40));

function countDevelopers(...developers) {
    return developers.length
}

console.log(countDevelopers("Mohammad", "Ali", "Narges", "Reza"));

function showSkills(...skills) {
    return skills[skills.length - 1]
}

console.log(showSkills("JavaScript", "Solidity", "Foundry", "React"));

function developerSkills(name, ...skills) {
     console.log(name);
     console.log(skills);
}
developerSkills(
    "Mohammad",
    "JavaScript",
    "Solidity",
    "Foundry"
);

const developers10 = ["Mohammad", "Ali", "Narges", "Reza"];

const [firstDeveloper, ...otherDevelopers] = developers10;

console.log(firstDeveloper);
console.log(otherDevelopers);




