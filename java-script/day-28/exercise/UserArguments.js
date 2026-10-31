const name = process.argv[2];
const age = process.argv[3];

console.log(`hello ${name}`);
console.log(`You are ${age} years old`);

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

console.log(`sum: ${num1 + num2}
             difference: ${num1 - num2}
             Multiplication: ${num1 * num2}
             Division: ${num1 / num2}`);