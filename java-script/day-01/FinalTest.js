const name = "Mohammad-RamezaniG";

const age = "19";

const country = "Iran";

const hoursPerDay = "8";

const goal ="Smart Contract Developer";

const isLearningJS = true;

const hasGitHub = true;

const ready =
    Number(age) >= 18 &&
    Number(hoursPerDay) >= 6 &&
    isLearningJS &&
    hasGitHub;



console.log(`
    ====================================
             PROJECT GENESIS
    ====================================
    Name: ${name}
    Name Uppercase: ${name.toUpperCase()}
    
    Age: ${age}
    Age Next Year; ${Number(age) + 1}
    
    Daily Study: ${hoursPerDay}
    Weekly Study: ${Number(hoursPerDay) * 7}
    
    Goal: ${goal}
    Contains "Contract": ${goal.includes("Contract")}
    
    Lerning JavaScript: ${isLearningJS}
    GitHub: ${hasGitHub}
    
    Ready for Project Genesis: ${ready}`);



