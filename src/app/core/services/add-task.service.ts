import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  private showAddTaskModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor (private http: HttpClient){

  }

  modalState$ = this.showAddTaskModal.asObservable();

  setModalVisibility(value: boolean) {
    console.log("Service addTaskService-> method setModalVisibility executed ....")
    this.showAddTaskModal.next(value);
  }

  getModalVisibility() {
    
    return this.showAddTaskModal.value;
  }

  addTodo(body:Object){
    return this.http.post<Task>("/api/todo/",body )
  }

}
