import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetTasksService {
  private apiUrl = 'api/todo/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
