export class TaskEntity {
    icon: 'Icon_Book_Circle';
    creationDate: Date;
    scheduledDate?: Date;
    scheduledTime?: number; // tempo agendado em segundos
    id: string;
    title: string;
    category: string[];
    completed: boolean;

    constructor(icon: 'Icon_Book_Circle', id: string, title: string, category: string[], completed: boolean, scheduledDate?: Date, scheduledTime?: number) {
        this.icon = icon;
        this.creationDate = new Date();
        this.scheduledDate = scheduledDate;
        this.scheduledTime = scheduledTime;
        this.id = id;
        this.title = title;
        this.category = category;
        this.completed = completed;
    }
}
