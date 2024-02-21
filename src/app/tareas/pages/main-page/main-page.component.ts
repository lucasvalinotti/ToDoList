import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private taskService: TaskService){ };

  get tasks(): Task[]{
    return [...this.taskService.tasks];
  }

  public addTask(task:Task){
    this.taskService.addTask(task);
  }

  public deleteTask(index: number){
    this.taskService.deleteTask(index);
  }

  public changeState(index:number){
    this.taskService.changeState(index);
  }
}
