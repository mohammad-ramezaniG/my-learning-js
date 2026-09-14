let skill = "JavaScript";

function createDeveloper() {

    let skill = "Solidity";

    return function () {

        let skill = "Foundry";

        return skill;
    };
}

let developer = createDeveloper();

console.log(skill);
console.log(developer());