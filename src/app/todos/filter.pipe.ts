import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo-model';
import { validFilter } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilter): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
        break;
      case 'pendings':
        return todos.filter(todo => !todo.completed);
        break;
      default:
        return todos;
        break;
    }
  }

}
