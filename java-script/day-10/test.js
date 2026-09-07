let developers = [
    {
        name: "Mohammad",
        skills: ["JavaScript", "Solidity"]
    }
];

function getSkill(index) {
    try {
        return developers[index].skills[1].toUpperCase();
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Finished");
    }
}

console.log(getSkill(2));