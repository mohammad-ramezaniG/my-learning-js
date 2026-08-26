const name = "Mohammad-RamezaniG";
const age = "19";
const country = "Iran";
const hoursPerDay = "8";
const goal = "Smart Contract Developer";
const isLearningJS = true;
const hasGitHub = true;

const ageNumber = Number(age);
const hoursPerDayNumber = Number(hoursPerDay);

const ready =
    ageNumber >= 18 &&
    hoursPerDayNumber >= 6 &&
    isLearningJS &&
    hasGitHub;

console.log(`
====================================
         PROJECT GENESIS
====================================

Name: ${name}
Name Uppercase: ${name.toUpperCase()}

Age: ${ageNumber}
Age Next Year: ${ageNumber + 1}

Country: ${country}

Daily Study: ${hoursPerDayNumber}
Weekly Study: ${hoursPerDayNumber * 7}

Goal: ${goal}
Contains "Contract": ${goal.includes("Contract")}

Learning JavaScript: ${isLearningJS}
GitHub: ${hasGitHub}

Ready for Project Genesis: ${ready}
====================================
`);
