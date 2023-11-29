import { Component, OnInit } from '@angular/core';
import { GetTasksService } from '../../services/get-tasks.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  constructor(private getTasksService: GetTasksService) {}

  ngOnInit(): void {
    this.getTasksService.getTasks().subscribe((res) => {
      console.log('tasks = ' + res);
    });
  }
}
