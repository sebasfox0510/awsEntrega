const tasks = [];

function createTask(task) {
    tasks.push(task);
}

function readTasks() {
    return tasks;
}

function updateTask(index, updatedTask) {
    tasks[index] = updatedTask;
}

function deleteTask(index) {
    tasks.splice(index, 1);
}

module.exports = { createTask, readTasks, updateTask, deleteTask };
