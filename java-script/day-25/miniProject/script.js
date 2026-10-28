const title = document.getElementById("main-title");
const input = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const paragraph = document.getElementById("message");
const taskList = document.getElementById("task-list");

function setupTask(task) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        task.remove();
        paragraph.textContent = "Task deleted";
    });

    task.appendChild(deleteButton);

    task.addEventListener("click", function () {
        task.classList.toggle("completed");
    });
}

taskList.querySelectorAll("li").forEach(setupTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        paragraph.textContent = "Please enter a valid task";
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    setupTask(task);

    taskList.appendChild(task);

    input.value = "";
    paragraph.textContent = "Task added successfully!";
}

function clearTask() {
    taskList.replaceChildren();
    paragraph.textContent = "Tasks cleared"
}

addButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearTask)


