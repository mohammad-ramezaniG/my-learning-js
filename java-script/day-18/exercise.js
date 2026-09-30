const skills = [
    "JavaScript",
    "Solidity",
    "JavaScript",
    "Python",
    "Solidity",
    "Foundry",
    "Python"
];

const uniqueSkills = new Set(skills);
console.log(uniqueSkills);

const skills1 = new Set([
    "JavaScript",
    "Solidity",
    "Python"
]);

skills1.add("Foundry");
console.log(skills1.has("Solidity"));
skills1.delete("Python");
console.log(skills1.size);

const skills2 = new Set([
    "JavaScript",
    "Solidity",
    "Python",
    "Foundry"
]);

const skillsArray = [...skills2];
console.log(skillsArray);
console.log(skillsArray.length);

const developers = new Map();

developers.set("Mohammad" , "JavaScript");
developers.set("Ali" , "Solidity");
developers.set("Narges" , "Python");

console.log(developers.get("Ali"));
console.log(developers.has("Mohammad"));
console.log(developers);


const developers1 = new Map();

developers1.set("Mohammad", {
    skill: "JavaScript",
    experience: 2,
});
developers1.set("Ali" , {
    skill: "Solidity",
    experience: 4,
})
developers1.set("Narges" , {
    skill: "Python",
    experience: 1,
})

const developer = developers1.get("Ali");
console.log(developer.skill);
console.log(developer.experience);

console.log(developers1.size);
developers1.delete("Narges");
console.log(developers1.size);
console.log(developers1.has("Narges"));

const developers3 = new Map();

developers3.set("Mohammad", "JavaScript");
developers3.set("Ali", "Solidity");
developers3.set("Narges", "Python");
developers3.set("Reza", "Foundry");

for (const [name , skill] of developers3) {
    console.log(`${name} knows ${skill}`);
}

const developer2 = {
    name: "Mohammad",
    skill: "JavaScript"
};

const salaries = new Map();

salaries.set(developer2 , 1500);
console.log(salaries.get(developer2));
console.log(salaries.has(developer2));








