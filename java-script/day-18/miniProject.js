const developers = new Map();

developers.set("Mohammad", {
    skill: "JavaScript",
    experience: 2,
    salary: 1200
});

developers.set("Ali", {
    skill: "Solidity",
    experience: 4,
    salary: 2000
});

developers.set("Narges", {
    skill: "Python",
    experience: 1,
    salary: 1000
});

developers.set("Reza", {
    skill: "Foundry",
    experience: 3,
    salary: 1800
});

console.log(developers.size);
const developer = developers.get("Ali");
console.log(`Ali skill : ${developer.skill}`);
console.log(`Ali Salary : ${developer.salary}`);
console.log(developers.has("Mohammad"));

for (const [name , developer] of developers) {
    console.log(name , developer.skill);
}

developers.delete("Narges");
console.log(developers.size);

