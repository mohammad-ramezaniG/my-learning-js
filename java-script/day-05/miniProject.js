let technologies = [
    "JavaScript",
    "Solidity",
    "Git",
    "GitHub",
    "Web3",
    "Python"
];

let count = 0;

console.log(`Total technologies = ${technologies.length}`);

for (let i = 0; i < technologies.length; i++) {
    
    if (technologies[i] === "Python") {
        
        continue;

    }
    
    console.log(technologies[i]);

    if (
        technologies[i] === "Solidity" ||
        technologies[i] === "Git" ||
        technologies[i] === "Web3"
    ) {
        
        count++;
    }

}

console.log(`Web3-related technologies: ${count}`);


