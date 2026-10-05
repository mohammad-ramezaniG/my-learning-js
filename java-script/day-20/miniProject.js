function clearName(name) {
    name = name.trim();
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return name;
}
console.log(clearName("   mohammAd   "));

function filterSkills(...skills) {
    const scriptSkills = skills.filter((skill) => skill.includes("Script")) 
    return scriptSkills
}

console.log(filterSkills(
    "JavaScript",
    "Solidity",
    "TypeScript",
    "Foundry"
));
 
function createDeveloper(name, ...skills) {

    return {
        name,
        skills
    };

}

const developer = createDeveloper(
    "Mohammad",
    "JavaScript",
    "Solidity",
    "Foundry"
);

console.log(developer);