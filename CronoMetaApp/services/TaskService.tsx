import { TaskEntity } from "../models/TaskEntity";


export class TaskService {
    private tasks: TaskEntity[] = [
        new TaskEntity('Icon_Book_Circle', '1', 'Task 1', ['Personal'], false, new Date(2022, 1, 1), 1800),
        new TaskEntity('Icon_Book_Circle', '2', 'Task 2', ['Profesional', 'TI'], true, new Date(2022, 1, 2), 3600),
        new TaskEntity('Icon_Book_Circle', '3', 'Task 3', ['Personal'], false, new Date(2022, 1, 3), 7200),
        new TaskEntity('Icon_Book_Circle', '4', 'Task 4', ['Profesional', 'TI'], true, new Date(2022, 1, 4), 1800),
        new TaskEntity('Icon_Book_Circle', '6', 'Task 1', ['Personal'], false, new Date(2022, 1, 1), 1800),
        new TaskEntity('Icon_Book_Circle', '7', 'Task 2', ['Profesional', 'TI'], true, new Date(2022, 1, 2), 3600),
        new TaskEntity('Icon_Book_Circle', '8', 'Task 3', ['Personal'], false, new Date(2022, 1, 3), 7200),
        ];

    // Create
    createTask(task: TaskEntity) {
        this.tasks.push(task);
    }

    // Read
    getTasks(): Promise<TaskEntity[]> {
        return Promise.all(this.tasks);
    }

    // Update
    updateTask(updatedTask: TaskEntity) {
        const index = this.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
            this.tasks[index] = updatedTask;
        }
    }

    // Delete
    deleteTask(id: string) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
}
export const taskService = new TaskService();
