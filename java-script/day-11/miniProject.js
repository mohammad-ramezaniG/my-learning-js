let developers = [
    { name: "Mohammad", age: 19, skill: "JavaScript" },
    { name: "Ali", age: 17, skill: "Python" },
    { name: "Reza", age: 22, skill: "Solidity" },
    { name: "Sara", age: 16, skill: "JavaScript" }
];

let result = developers
    .filter(developer => developer.age >= 18)
    .map(developer => `${developer.name} - ${developer.skill}`);



console.log(result);

