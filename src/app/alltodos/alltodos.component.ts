import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.scss']
})
export class AlltodosComponent implements OnInit {
  public posts;
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getAllTodos().subscribe(posts => (this.posts = posts));
  }
}
