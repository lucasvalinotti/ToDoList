import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor() { }
  public tasks: Task[] = [  ];

  public addTask(task: Task): void{
    this.tasks.push(task);
  }

  public deleteTask(index:number):void{
    this.tasks.splice(index,1);
  }

  public changeState(index:number):void{
    this.tasks[index].state = !this.tasks[index].state;
  }
}