import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_USERS } from '../../assets/dummy-users';
import { dummyTasks } from '../../assets/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId?: string;
  isAdding = false;

  constructor(private tasksService: TasksService) {}

  get name() {
    return DUMMY_USERS.find((user) => user.id === this.userId)?.name;
  }

  get selectedTasks () {
    return this.tasksService.getUsersTasks(this.userId!);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id)
  }

  onStartNewTask() {
    this.isAdding = true;
  }

  onCancelNewTask() {
    this.isAdding = false;
  }

  onAddNewTask(task: Task) {
    this.tasksService.addTask(task, this.userId!)
    this.isAdding = false
  }
}
