const calculator = require("./utils/calculator");

const argument1 = Number(process.argv[2]);
const argument2 = Number(process.argv[3]);

if (Number.isNaN(argument1) || Number.isNaN(argument2) ) {
    console.log("Please provide valid numbers as arguments.");
} else {
    console.log("===== MODULAR CALCULATOR =====");
    console.log(`First Number: ${argument1}`);
    console.log(`Second Number: ${argument2}
                
                `);

    console.log("Sum:", calculator.sum(argument1, argument2));
    console.log("Difference:", calculator.difference(argument1, argument2));
    console.log("Multiplication:", calculator.multiplication(argument1, argument2));
    console.log("Division:", calculator.division(argument1, argument2));
}