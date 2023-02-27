import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  toDo = [''];

  inProgress = [''];

  toBeTested = [''];

  done = [''];

  deleted = [''];

  deleteEmptyTask() {
    this.toDo.splice(0, 1);
    this.inProgress.splice(0, 1);
    this.toBeTested.splice(0, 1);
    this.done.splice(0, 1);
    this.deleted.splice(0, 1);
  }

  addTask() {
    let task: any;
    let description: any;

    task = document.getElementById('taskName');
    description = document.getElementById('taskDescription');

    if (this.toDo[0] == '') {
      this.toDo.push(task.value + ': ' + description.value);
      this.deleteEmptyTask();
    } else {
      this.toDo.push(task.value + ': ' + description.value);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  constructor() {}

  ngOnInit(): void {
    this.deleteEmptyTask();
  }
}
