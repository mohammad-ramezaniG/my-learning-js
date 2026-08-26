function greet() {
    
    console.log("Hello, Developer!");
    
}

greet();

function introduce(name) {

    console.log(`Hello ${name}`);
    
    
}

introduce("Mohammad")

function add(a , b) {

    return a + b ;
    
}

let result = add(5 , 10);

console.log(result);


function checkAge(age) {
    
    if (age >=18) {

        return "Allowed";
    } else {

        return "Denied";
    }
}

let status = checkAge(19)

console.log(status);


function checkDeveloperStatus(age , javaScriptHours , hasGit) {
    
    if (age < 18) {
    
        return "Too young";

    } else if (javaScriptHours < 50) {

        return "Learn more JavaScript";

    } else if (!hasGit) {
        
        return "Learn Git";

    } else {

        return "Ready";
    }
}

let result1 = checkDeveloperStatus( 19 , 70 ,true);

console.log(result);
