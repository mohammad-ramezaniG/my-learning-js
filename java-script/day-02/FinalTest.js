let age = 19;
let javascriptHours = 100;
let solidityHours = 60;
let hasGit = true;
let hasGitHub = true;
let isBanned = false;

if (age < 18) {
    
    console.log("Too young.");
    
} else if (javascriptHours < 50) {
    
    console.log("Learn more JavaScript.");
    
} else if (!hasGit) {
    
    console.log("Learn Git.");
    
} else if (!hasGitHub) {
    
    console.log("Create a GitHub account.");
    
} else if (solidityHours < 50) {
    
    console.log("Learn more Solidity.");
    
} else if (isBanned) {
    
    console.log("Access denied.");
    
} else {

    console.log("Ready for next stage.");
    
}