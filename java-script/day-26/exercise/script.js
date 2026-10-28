//تمرین 1
const title = document.getElementById("title");
const button = document.getElementById("change-button");

function changeTitle() {
    title.textContent = "The title has changed!";
}

button.addEventListener("click", changeTitle);

//تمرین 2
const username = document.getElementById("username");
const output = document.getElementById("output");

username.addEventListener("input", function () {
    output.textContent = username.value;
});

//تمرین 3
const search = document.getElementById("search");
const keyOutput = document.getElementById("key-output");

search.addEventListener("keydown", function (event) {
    keyOutput.textContent = event.key;
});

//تمرین 4
const parent = document.getElementById("parent");

parent.addEventListener("click", function (event) {
    console.log("Target:", event.target);
    console.log("Current:", event.currentTarget);
});

//تمرین 5
const link = document.getElementById("my-link");
const message = document.getElementById("message");

link.addEventListener("click", function (event) {
    event.preventDefault();
    message.textContent = "Navigation was prevented.";
});

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function () {
    console.log("Parent clicked");
});

child.addEventListener("click", function () {
    console.log("Button clicked");
    event.stopPropagation()
});