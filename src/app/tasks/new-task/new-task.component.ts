import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<Task>();

  enteredTitle = ''
  enteredSummary = ''
  enteredDueDate = ''



  onCancel() {
    this.cancel.emit()
  }

  onSubmit() {
    const task: Task = {
      id: '',
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
      userId: ''
    }
    this.submit.emit(task)
  }
}
