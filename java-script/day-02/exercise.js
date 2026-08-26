// If statement

let age = 17;

if (age >= 18) {

    console.log("you can enter");
    
} else {

    console.log("you cannot enter");
    
}

let hoursPerDay = 5;

if (hoursPerDay >= 6) {

    console.log("good study schudule.");
    
} else{

    console.log("you need to study more");
    
}


let score = 87;

if (score >= 90) {
    
    console.log("exellent");
    
} else if (score >= 80) {

    console.log("very good");
    
} else if (score >= 70) {

    console.log("good");
    
} else {

    console.log("you need improvement");
    
}

let age = 19;
let hoursPerDay =8

if (age >= 18 && hoursPerDay >= 6) {

    console.log("Ready to start");
    
}

let hasETH = false;
let hasUSDC = true;

if (hasETH || hasUSDC) {
    
    console.log("Ready for transaction");
    
}

let isBusy = false;


if (!isBusy) {
  
    console.log("availabe");
    
}


let age = 19;
let hasWallet = true;
let hasETH = false;
let hasUSDC = true;

if (age >= 18 && hasWallet && (hasETH || hasUSDC)) {
    
    console.log("transaction allowed");
    
}

let age = 19;

if (age !== 20) {
        
    console.log(" age is not 20");
        
} else{

    console.log("age is 20");
        
}


let temperature = 25;

if (temperature >= 30) {
    
    console.log("Hot");
    
} else if (temperature >= 20 ) {
    
    console.log("Nice");
    
} else {

    console.log("Cold");
    
}

let age = 19
let hoursPerDay = 8

if (age >= 18 && hoursPerDay >= 6) {
    
    console.log("Accepted");
    
} else {

    console.log("Not accepted");
    
}

let hasETH = false;
let hasUSDC = true;

if (hasETH || hasUSDC) {
    
    console.log("Transaction possible");
    
} else {

    console.log("Need ETH or USDC");
    
}

let isBusy = false;
let hasTask = true;

if (!isBusy && hasTask) {
    
    console.log("Ready to work");
    
} else {

    console.log("Not ready");
    
}

let age = 19;
let hasWallet = true;
let hasETH = false;
let hasUSDC = true;
let isBanned = false;

if (age >= 18 && hasWallet && (hasETH || hasUSDC) && !isBanned) {
    
    console.log("Access granted");
    
} else {

    console.log("Access denied");
    
}