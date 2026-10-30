const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password")
const form = document.getElementById("signup-form");
const message = document.getElementById("message");


form.addEventListener("submit" , function(event) {
    message.textContent = "";
    const usernameInputText = usernameInput.value.trim();
    const emailInputText = emailInput.value.trim()
    const passwordText = passwordInput.value.trim();
   event.preventDefault();
   if (
    usernameInputText !== "" &&
    passwordText.length >= 8 && 
    emailInputText !== "" &&
    emailInputText.includes("@") 
    ) {
        localStorage.setItem("username", usernameInputText);

       

        console.log(usernameInput.value);
        console.log(emailInput.value);
        console.log(passwordInput.value);
        
        
        message.textContent = "Submited"
   } else {
    message.textContent = "Invalid input"
    return
   }
   
})
 const user = localStorage.getItem("username");
 console.log(user);