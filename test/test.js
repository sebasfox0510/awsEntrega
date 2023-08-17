// test/test.js
const { expect } = require('chai');
const { createTask, readTasks, updateTask, deleteTask } = require('../src/tasks');

describe('CRUD operations', () => {
    beforeEach(() => {
        // Limpia el array de tareas antes de cada prueba
        while (readTasks().length) {
            deleteTask(0);
        }
    });

    it('should create a task', () => {
        createTask('Task 1');
        expect(readTasks()).to.have.lengthOf(1);
    });

    it('should update a task', () => {
        createTask('Task 1');
        updateTask(0, 'Updated Task');
        expect(readTasks()[0]).to.equal('Updated Task');
    });

    it('should delete a task', () => {
        createTask('Task 1');
        deleteTask(0);
        expect(readTasks()).to.have.lengthOf(0);
    });
});
