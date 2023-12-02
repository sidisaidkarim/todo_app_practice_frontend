import { Component, OnInit } from '@angular/core';
import { GetTasksService } from '../../services/get-tasks.service';
import { Task } from '../../model/task.model';
import { DeteteTaskService } from '../../services/detete-task.service';
import { AddTaskService } from '../../services/add-task.service';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];
  showAddTaskModal: boolean = false;

  constructor(
    private getTasksService: GetTasksService,
    private deleteTaskService: DeteteTaskService, private addTaskService: AddTaskService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.getTasksService.getTasks().subscribe((res) => {
      this.tasks = res;
    });
  }

  deleteTask(id: string) {
    this.deleteTaskService.deleteTask(id).subscribe(
      (res) => this.fetchData(),
      (error: any) => {
        console.error('Error during deletion:', error);
      }
    );
  }

  showAddTaskModel(){
      this.addTaskService.setModalVisibility(true);
  }
}
