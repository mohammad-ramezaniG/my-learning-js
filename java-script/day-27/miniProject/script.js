const form = document.getElementById("signup-form")

const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const message = document.getElementById("message");

const user = document.getElementById("user-profile");
const savedUsername =document.getElementById("saved-username");
const savedEmail = document.getElementById("saved-email");
const clearButton = document.getElementById("clear-button");



form.addEventListener("submit", function(event) {

    event.preventDefault();

   emailError.textContent = "";
   passwordError.textContent = "";
   usernameError.textContent = "";
   message.textContent = "";

   let isValid = true;

    const usernameText = username.value.trim();
    const emailText = email.value.trim();
    const passwordText = password.value;
    

    if (usernameText === "" || usernameText.length < 3) {
        if (usernameText === "") {
            usernameError.textContent = "ussername is required ";
        } else {
            usernameError.textContent = "Username must be at least 3 characters"
        }
        isValid = false;
    } 
    if (emailText === "" || !(emailText.includes("@") && emailText.includes("."))) {
        emailError.textContent = "Invalid Email ";
        isValid = false;
    }
    if (passwordText === "" || passwordText.length < 8) {

        if (passwordText === "") {
            passwordError.textContent = "password required";
        } else {
            passwordError.textContent = "Password must be at least 8 characters";
        }
        isValid = false;
    }
    if (
        isValid
    ) {
        message.textContent = "User submitted"
        localStorage.setItem("username", usernameText);
        localStorage.setItem("email", emailText);

        savedUsername.textContent = usernameText;
        savedEmail.textContent = emailText;
        user.hidden = false;
    } else {
        message.textContent = "Invalid inpute";
        return;
    }

});

const storedUsername = localStorage.getItem("username");
const storedEmail = localStorage.getItem("email");

if (storedUsername && storedEmail) {
    user.hidden = false;
    savedUsername.textContent = storedUsername;
    savedEmail.textContent = storedEmail;
}

clearButton.addEventListener("click", function() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    savedUsername.textContent = "";
    savedEmail.textContent = "";

    user.hidden = true;
    message.textContent = "Data cleared";
})