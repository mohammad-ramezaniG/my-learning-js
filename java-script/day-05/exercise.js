let skills = [
    "JavaScript",
    "Solidity",
    "Git",
    "GitHub",
    "Web3"
]

skills[2] = "Git & GitHub";
skills[4] = "BlockChain";


let skills2 = [
    "JavaScript",
    "Solidity",
    "Git",
];


skills2.push("Web3");
skills2.push("BlockChain");
skills2.pop();

console.log(skills2);

let skills3 = [
    "Solidity",
    "Git",
];

skills3.unshift("JavaScript");
skills3.push("Web3");
skills3.shift();

console.log(skills3);

let skills4 = [
    "JavaScript",
    "Solidity",
    "Git",
    "Web3"
];

console.log(skills4.includes("Solidity"));

console.log(skills4.includes("Python"));

let skills5 = [
    "JavaScript",
    "Solidity",
    "Git",
    "Web3"
];

console.log(skills5.indexOf("Git"));
console.log(skills5.indexOf("Python"));


let technologies = [
    "JavaScript",
    "Git",
    "Solidity"
];

technologies.push("Web3");

console.log(technologies.includes("Solidity"));

console.log(technologies.indexOf("Git"));

technologies[2] = "Git & GitHub";

console.log(technologies.length);

console.log(technologies[technologies.length - 1]);


let technologies1 = [
    "JavaScript",
    "Solidity",
    "Git",
    "GitHub",
    "Web3"
];

for (let i = 0; i < technologies1.length; i++) {
    
    console.log(technologies1[i]);
    
};

let technologies2 = [
    "JavaScript",
    "Solidity",
    "Git",
    "GitHub",
    "Web3"
];

for (let i = 0; i < technologies2.length; i++) {
    
    if (technologies2[i] === "Solidity") {
        
        console.log(technologies2[i]);
        
    };
    
};


let technologies3 = [
    "JavaScript",
    "Solidity",
    "Git",
    "GitHub",
    "Web3"
];

for (let i = 0; i < technologies3.length; i++) {
    
    if (technologies3[i] === "Git" || technologies3[i] === "GitHub") {
        
        console.log(technologies3[i]);
        
    }
}

let technologies4 = [
    "JavaScript",
    "Solidity",
    "Git",
    "GitHub",
    "Web3"
];

let count = 0

for (let i = 0; i < technologies4.length; i++) {

    if (technologies4[i] === "Git" || technologies4[i] === "GitHub") {
        
        count++;
    }
}

console.log(count);


let technologies5 = [
    "JavaScript",
    "Git",
    "Solidity",
    "Web3",
    "Python"
];

for (let i = 0; i < technologies5.length; i++) {
    
    if (technologies5[i] === "Solidity") {
        
        console.log("Solidity found");
        
        break;
    }
}


let technologies6 = [
    "JavaScript",
    "Solidity",
    "Git",
    "Python",
    "Web3"
];

for (let i = 0; i < technologies6.length; i++) {
    
    if (technologies6[i] === "Python") {
        continue;
    }

    console.log(technologies6[i]);
    
}


let technologies7 = [
    "JavaScript",
    "Solidity",
    "Python",
    "Git",
    "Python",
    "Web3"
];

let count1 = 0;

for (let i = 0; i < technologies7.length; i++) {
    
    if (technologies7[i] === "Python") {
        
        continue;

    }

    console.log(technologies7[i]);

    count1++;
    
}

console.log(count1);

 
