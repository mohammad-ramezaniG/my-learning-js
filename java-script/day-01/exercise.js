const name = "Mohammad";

const age = 19;

const country = "Iran";

const hoursPerDay = 8;

const goal = "Smart Contract Developer"

const project ="Project  Genesis"

const learning = true;

console.log(`my name is ${name}, i'm from ${country}, i'm ${age} years old and my goal is become a ${goal}.`);

console.log(`i study ${hoursPerDay * 7} in week.`);

console.log(goal.length);

console.log(goal.includes("Contract"));

console.log(`==========  ${project}  ==========
Name = ${name}
age  = ${age}
Country = ${country}
Daily study = ${hoursPerDay}
Weekly study = ${hoursPerDay * 7}
Goal = ${goal}
Learning JavaScript = ${learning} 
=======================================`);




const ageStr ="19";

console.log(typeof ageStr);

let numAge2 = Number(ageStr);

console.log(typeof numAge2);

console.log(numAge2 + 5);

const hoursPerDayStr ="8"

console.log(Number(ageStr) + 5);

console.log(Number(hoursPerDayStr) * 7);



//Logical operators & comparision Exersize

//Exercise 1

const ageNumber = 19;

const hoursPerDayNumber = 8;

const isLearning = true;


console.log(ageNumber >= 18);

console.log(hoursPerDayNumber >= 6);

console.log(ageNumber >= 18 && hoursPerDayNumber >= 6);

console.log(!isLearning);

//Exercise 2

const ready = 
            ageNumber >= 18 &&
            hoursPerDayNumber >= 6 &&
            isLearning;

console.log(Ready);

//Exersize 3

const ageNumber2 = 19;

const hoursPerDayNumber2 = 8;

const hasGitHub = true;

const knowingEnglish = false;

console.log(ageNumber2 >= 18 && hoursPerDayNumber2 >= 6 && hasGitHub);

console.log(hasGitHub || knowingEnglish);















