function sum(num1 , num2) {
    return num1 + num2;
}

function difference(num1 , num2) {
    return num1 - num2;
}

function multiplication(num1 , num2) {
    return num1 * num2;
}

function division(num1 , num2) {
    if (num2 === 0) {
        return 0;
    } else if (num1 === 0) {
        console.log(`${num1} cant be zero`);
    } else {
        return num1 / num2;
    }
}

module.exports = {
    sum,
    difference,
    multiplication,
    division
}