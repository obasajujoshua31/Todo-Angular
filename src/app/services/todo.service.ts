import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Post from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  public getTodo(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.todoUrl}/${id}`);
  }
}
