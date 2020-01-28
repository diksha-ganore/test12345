import { Component } from '@angular/core';
//import { toUnicode } from 'punycode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Todos';
  todos = [
  {
    label: 'xyz',
    done: false,
    priority: 3
  },
  {
    label: 'abc',
    done: true,
    priority: 1
   },
   {
    label: 'pqr',
    done: false,
    priority: 4
   },
   {
    label: 'stu',
    done: false,
    priority: 2
   },
  ];

  addTodo(newTodoLabel: any){
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo: any) {
    this.todos = this.todos.filter( t => t.label !== todo.label );
  }
  updateStatus(done: boolean,i: number) {
    console.log(done,i)
    todos
    [i] == ;
  }
}
