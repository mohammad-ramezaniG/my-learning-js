function checkDeveloper(age , javaScriptHours, hasGit) {
    
    if (age < 18) {
        
        return "Not old enough";

    } else if (javaScriptHours < 70) {
        
        return "Need learn more JavaScript";

    } else if (!hasGit) {
        
        return "Need Git"

    } else {

        return "Ready";
    }
}

let status = checkDeveloper(19 , 85 , true);

console.log(status);
