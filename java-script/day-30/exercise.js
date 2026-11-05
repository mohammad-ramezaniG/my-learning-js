function multiply(num1 , num2) {
    
    return num1 * num2;
}

const calculate = multiply;

console.log(calculate(5 , 10));

function sum(num1 , num2) {

    return num1 + num2;
}

function subtract(num1 , num2) {
    
    return num1 - num2;
}

function executeOperation(num1 , num2 , excutor) {
    return excutor(num1 , num2);
}

console.log(executeOperation(5, 20, sum));
console.log(executeOperation(14 , 29 , multiply));

const array = [
    multiply,
    sum,
    subtract
]

console.log(array[0](10, 50));
console.log(array[1](10, 20));
console.log(array[2](10, 50));


const prices = [100, 200, 300, 400, 500];

const newPrice = prices.map(function (number) {
    return number + (number/5);
});

const numbers = [12, 7, 25, 30, 9, 42, 18, 5];

const newNumbers = numbers.filter(function (number) {
    return number >= 15;
});

const expenses = [120, 250, 80, 450, 100];

const totalExpenses = expenses.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
} , 0);

const numbers2 = [2, 5, 8, 11, 14, 17, 20];

const newNumbers2 = numbers2
    .filter(function (number) {
        return (number % 2) === 0;
    })
    .map(function (number) {
        return number * 3;
    })

function processArray(array, callback) {
    const result = [];

    for (const element of array) {
        result.push(callback(element));
    }

    return result;
}

function multiply2(number) {
    return number * 3;
}

console.log(processArray(numbers2, multiply2));