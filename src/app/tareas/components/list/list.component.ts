import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'tasks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output()
  onChangeState: EventEmitter<number> = new EventEmitter();

  @Input()
  public tasksList: Task[] = [];

  deleteTask(index: number){
    this.onDeleteTask.emit(index);
  }

  changeState(index:number){
    this.onChangeState.emit(index);
  }
}
