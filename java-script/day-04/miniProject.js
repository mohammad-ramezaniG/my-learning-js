function validateDeveloper(age , JavaScriptHours) {
    
    if (age < 18) {
        
        return "Too young";

    } else if (JavaScriptHours < 100) {

        return "Need more JavaScript";
        
    } else {

        return "Approved";

    }
}

function cratePortifle(name , skill) {
    
    return {

        name: name,
        skill: skill

    };
}

let status = validateDeveloper(19 , 120);
let profile = cratePortifle (
    "Mohammad",
    "Smart contract"
);

console.log(status);
console.log(profile);



