import { Injectable } from "@angular/core";
import { dummyTasks } from "../../assets/dummy-tasks"
import { Task } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = dummyTasks;
    
    getUsersTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(task: Task, userId: string) {
        task.userId = userId;
        task.id = new Date().getTime().toString();
        this.tasks.unshift(task)
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id != taskId)
    }
}