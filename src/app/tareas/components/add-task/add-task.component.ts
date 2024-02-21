import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';


@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output()
  public emitTask: EventEmitter<Task> = new EventEmitter();

  public task: Task = {
    state: false,
    name: ''
  };

  public addTask():void{
    if (this.task.name !== '') {
      this.emitTask.emit({...this.task});
      this.task.name = '';
    }
  }
}
