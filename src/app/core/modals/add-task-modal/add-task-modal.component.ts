import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskService } from '../../services/add-task.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent {
  showAddTaskModal: boolean = true;

  addTaskForm = new FormGroup({
    task: new FormControl('')
  });

  constructor(
    private addTaskService: AddTaskService
  ) {
    this.addTaskService.modalState$.subscribe((state) => {
      this. showAddTaskModal = state;
    });
   }

   closeModal() {
    console.log("closeModal function executed")
    this.addTaskService.setModalVisibility(false);
  }

  submit() {
    console.log(this.addTaskForm.value)
    const newTask = {
      "task":this.addTaskForm.value.task,
      "completed": false
    }
    this.addTaskService.addTodo(newTask).subscribe(data=>{
      console.log(data)
    })
    this.closeModal()
  }



}
