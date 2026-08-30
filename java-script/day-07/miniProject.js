let developers = [
    {
        name: "Mohammad",
        age: 19,
        skill: "Smart Contract"
    },
    {
        name: "Ali",
        age: 21,
        skill: "Solidity"
    },
    {
        name: "Narges",
        age: 17,
        skill: "DeFi"
    },
    {
        name: "Reza",
        age: 16,
        skill: "JavaScript"
    }
];

let result = developers
    .filter(function(developer) {
        return developer.age >= 18 && developer.skill !== "JavaScript";
    })
    .map(function(developer) {
        return developer.name;
    })

    console.log(result);
    