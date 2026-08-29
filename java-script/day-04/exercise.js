function CreatDeveloper(name , age , skill) {
    
    return {
        name: name,
        age: age,
        skill: skill
    };
}

let Developer = CreatDeveloper("Mohammad" , 19 , "Smart contract");

console.log(Developer);


function square(number) {

    return number * number;
    
}

function addTen(number) {
    
    return add + 10;
}

let result = addTen(squre(5));

console.log(result);

function calculateGas(gasPrice , gasUsed) {
    
    return gasPrice * gasUsed;
}

let result = calculateGas(1000 , 20);

console.log(result);
