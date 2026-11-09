function createTaskManager() {

    const tasks = [];
    let nextId = 1;
    let remaind = 0;

    return {
        addTask(title){
            const newTask = {
                id: nextId++,
                title: title,
                completed: false
            }
            tasks.push(newTask)
        },
        deleteTask(id) {
            const newTasks = tasks.filter(task => task.id !== id)
            
            tasks.length = 0;
            tasks.push(...newTasks);
        },
        completeTask(id) {
            for (const task of tasks) {
                if(task.id === id) {
                    task.completed = true;
                }
            }
        },
        getTasks() {
            
            return tasks.map(task => ({...task}));
        },
        filterTasks(status) {
            const filtered = tasks
            .filter(task => task.completed === status)
            .map(task => ({...task}));
            return filtered;
        },
        getRemainingTasks() {
            let remaining = 0;
            for (const task of tasks) {
                if (task.completed === false) {
                    ++remaining;
                }
            }
            return remaining;
        }
        
    };
}

const taskManager = createTaskManager();

// 1. Add Tasks
taskManager.addTask("Learn JavaScript");
taskManager.addTask("Learn Node.js");
taskManager.addTask("Learn Solidity");
taskManager.addTask("Build a DeFi Project");

console.log("Initial Tasks:");
console.log(taskManager.getTasks());

// 2. Complete Tasks
taskManager.completeTask(1);
taskManager.completeTask(3);

console.log("After Completing Tasks:");
console.log(taskManager.getTasks());

// 3. Filter Completed Tasks
console.log("Completed Tasks:");
console.log(taskManager.filterTasks(true));

// 4. Filter Remaining Tasks
console.log("Uncompleted Tasks:");
console.log(taskManager.filterTasks(false));

// 5. Get Remaining Tasks Count
console.log("Remaining Tasks Count:");
console.log(taskManager.getRemainingTasks());

// 6. Delete a Task
taskManager.deleteTask(2);

console.log("After Deleting Task 2:");
console.log(taskManager.getTasks());

// 7. Final Remaining Tasks Count
console.log("Final Remaining Tasks:");
console.log(taskManager.getRemainingTasks());
    