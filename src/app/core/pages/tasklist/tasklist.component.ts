import { Component, OnInit } from '@angular/core';
import { GetTasksService } from '../../services/get-tasks.service';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private getTasksService: GetTasksService) {}

  ngOnInit(): void {
    this.getTasksService.getTasks().subscribe((res) => {
      this.tasks = res;
    });
  }
}
