import { Component, OnInit } from '@angular/core';

export interface Todo {
  title: string;
}

@Component({
  selector: 'myworkspace-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [{ title: 'todo1' }, { title: 'todo2' }];
  newTodo = '';
  constructor() {}

  ngOnInit() {}

  private keyPress(val: string) {
    this.newTodo = val;
  }
  private addTodo() {
    const todo = {
      title: this.newTodo
    };
    this.todos.push(todo);
    this.newTodo = '';
  }
}
