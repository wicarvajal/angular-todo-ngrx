import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo-model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilter } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  actualFilter: validFilter;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // está pendiente de todos los cambios, actualiza el arreglo
    this.store.subscribe(({filter, todos}) => {
      this.todos = todos;
      this.actualFilter = filter;
    });
  }

}
