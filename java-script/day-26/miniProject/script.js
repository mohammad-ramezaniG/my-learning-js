const mainTitle = document.getElementById("main-title");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const message = document.getElementById("message");
const taskList = document.getElementById("task-list");
const totalTask = document.getElementById("total-count");
const completed = document.getElementById("completed-count");
const remaining = document.getElementById("remaining-count");

function setupTask(task) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    
    task.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(event) {
        event.stopPropagation();
        task.remove();
        updateStats();
        message.textContent = "Task successfully deleted";
    })

     task.addEventListener("click", function () {
        task.classList.toggle("completed");
        updateStats();
    });
}

function updateStats() {
    const tasks = taskList.querySelectorAll("li");
    let complatedCount = 0;
    
    for (const task of tasks) {
        if (task.classList.contains("completed")) {
            ++complatedCount;
            
        }
    }
    totalTask.textContent = tasks.length;
    completed.textContent = complatedCount;
    remaining.textContent = tasks.length - complatedCount;
    
}

function addTask() {

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        message.textContent = "Please enter valid task";
        return;
    };

    const task = document.createElement("li");
    task.textContent = taskText;

    setupTask(task);

    taskList.appendChild(task);
    taskInput.value = "";
    message.textContent = "Task added succeesfully";

    updateStats()
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask()
    }
})
