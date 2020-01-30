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

  addTodo( addLabel: string, addNo: number){
    var newTodo = {
      label: addLabel,
      priority: addNo ,
      done: false
    };
    this.todos.push(newTodo);
  }


  // deleteTodo(todo: any,done: boolean ,i:number) {
  //   this.todos = this.todos.filter( t => {
  //    if(t.label !== todo.label){
  //     return t
  //    } else {
  //      if(todo.done === false){ return t}
  //    }
  //   } );
  // }

  deleteTodo(i: number) {

   this.todos.splice(i, 1)
    // this.todos = this.todos.filter( t => {
    //  if(t.label !== todo.label){
    //   return t
    //  } else {
    //    if(todo.done === false){ return t}
    //  }
    // } );
  }
  updateStatus(done: boolean,i: number) {
     this.todos[i].done = true;

}
}
