const developers = [
    { name: "Mohammad", skill: "JavaScript", experience: 2, salary: 1200 },
    { name: "Ali", skill: "Solidity", experience: 4, salary: 2000 },
    { name: "Narges", skill: "Python", experience: 1, salary: 1000 },
    { name: "Reza", skill: "Solidity", experience: 3, salary: 1800 },
    { name: "Sara", skill: "JavaScript", experience: 5, salary: 2500 }
];
console.log(`Developers: ${developers.length}`);
const solidityDevelopers = developers
    .filter(developer => developer.skill === "Solidity")
    .map(developer => developer.name);
    console.log(`Solidity Developers: ${solidityDevelopers}`);
    
const summery = developers.reduce((result , developer) => {
    result.totalSalary += developer.salary;
    result.totalExperience += developer.experience;
    return result
} , {
    totalSalary: 0,
    totalExperience: 0
})
    summery.averageExperience =
        summery.totalExperience / developers.length;
console.log(`Average Experience: ${summery.averageExperience}`);
console.log(`Total Salary: ${summery.totalSalary}`);
const has5Year = developers.some(developer => developer.experience >= 5);
const min1Year = developers.every(developer => developer.experience >= 1);
const solidityDeveloper = developers.find(developer => developer.skill === "Solidity")

console.log(`Has 5+ Years Experience: ${has5Year}`);
console.log(`Everyone Has Experience: ${min1Year}`);
console.log(`First Solidity Developer: ${solidityDeveloper.name}`);
