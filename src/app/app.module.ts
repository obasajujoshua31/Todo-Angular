import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlltodosComponent } from './alltodos/alltodos.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, AlltodosComponent, TodoComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
