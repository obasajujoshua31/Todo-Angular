import { TodoService } from './../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public post;
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.todoService
      .getTodo(+this.route.snapshot.paramMap.get('id'))
      .subscribe(post => (this.post = post));
  }
}
