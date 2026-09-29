const skills = ["JavaScript", "Solidity", "Python", "Foundry"];

const result = skills.some(skill => skill === "Solidity")

console.log(result);

const scores = [18, 15, 20, 17, 19];

const result1 = scores.every(score => score >= 10)

console.log(result1);

const prices = [100, 250, 50, 300];

const totalPrice = prices.reduce((sum , price) => {
    return sum + price;
} , 0)

console.log(totalPrice);

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 }
];

const totalPrice1 = products.reduce((sum , product) => {
    return sum + product.price;
} , 0)

const developers = [
    { name: "Mohammad", skill: "JavaScript" },
    { name: "Ali", skill: "Solidity" },
    { name: "Narges", skill: "Python" }
];

const developersByName = developers.reduce((result , developer) => {
    result[developer.name] = developer.skill;
    return result ;
} , {})

console.log(developersByName);

const developers2 = [
    { name: "Mohammad", skill: "JavaScript", experience: 2 },
    { name: "Ali", skill: "Solidity", experience: 4 },
    { name: "Narges", skill: "Python", experience: 1 },
    { name: "Reza", skill: "Solidity", experience: 3 }
];

const result12 = developers2
    .filter(developer => developer.experience >= 3)
    .map(developer => developer.name);

console.log(result);

const developers1 = [
    { name: "Mohammad", skill: "JavaScript", experience: 2, salary: 1200 },
    { name: "Ali", skill: "Solidity", experience: 4, salary: 2000 },
    { name: "Narges", skill: "Python", experience: 1, salary: 1000 },
    { name: "Reza", skill: "Solidity", experience: 3, salary: 1800 }
];

const totalPrice3 = developers1
    .filter(developer => developer.experience >= 3)
    .reduce((sum , developer) => {
        return sum + developer.salary
    } , 0)

console.log(totalPrice3);

const hasSolidity = developers1.some(developer => developer.skill === "Solidity");
const solidityDevelopers = developers1.filter(developer => developer.skill === "Solidity");

console.log(hasSolidity);
console.log(solidityDevelopers);

const allExperienced = developers.every(developer => developer.experience >= 1);

let totalSalary = 0;

if (allExperienced) {
    totalSalary = developers.reduce((sum , developer) => {
        return sum + developer.salary;
    } , 0);
}

console.log(allExperienced);
console.log(totalSalary);

const solidityDeveloper = developers1.find(developer => developer.skill === "Solidity")
console.log(solidityDeveloper.name);

const developers5 = [
    { name: "Mohammad", salary: 1200 },
    { name: "Ali", salary: 2000 },
    { name: "Narges", salary: 1000 },
    { name: "Reza", salary: 1800 }
];

const summery = developers5.reduce((result , developer) => {
    result.totalSalary += developer.salary;
    result.developersCount++;
    return result
} , {
    totalSalary: 0,
    developersCount: 0
});

summery.averageSalary = summery.totalSalary / summery.developersCount;

console.log(summery);
