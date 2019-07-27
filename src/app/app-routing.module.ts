import { TodoComponent } from './todo/todo.component';
import { AlltodosComponent } from './alltodos/alltodos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    component: AlltodosComponent
  },
  {
    path: 'post/:id',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
