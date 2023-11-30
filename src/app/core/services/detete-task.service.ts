import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeteteTaskService {
  readonly apiUrl = 'api/todo/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    responseType: 'text' as 'json',
  };

  public deleteTask(id: string): Observable<String> {
    return this.http.delete<String>(`${this.apiUrl}${id}`, this.httpOptions);
  }
}
