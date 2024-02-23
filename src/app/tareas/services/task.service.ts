import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor() {
    this.loadLocalStorage();
  }
  public tasks: Task[] = [  ];

  public addTask(task: Task): void{
    this.tasks.push(task);
    this.saveLocalStorage();
  }

  public deleteTask(index:number):void{
    this.tasks.splice(index,1);
    this.saveLocalStorage();
  }

  public changeState(index:number):void{
    this.tasks[index].state = !this.tasks[index].state;
    this.saveLocalStorage();
  }

  public deleteAll():void{
    this.tasks = [];
    this.removeLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('tasks'))return;
    this.tasks = JSON.parse(localStorage.getItem('tasks')! );
  }

  private removeLocalStorage():void{
    if(!localStorage.getItem('tasks'))return;
    localStorage.removeItem('tasks');
  }

}