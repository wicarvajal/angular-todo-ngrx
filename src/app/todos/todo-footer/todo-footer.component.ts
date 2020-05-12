import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filter/filter.actions';
import { clearCompleted } from '../todo-actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validFilter = 'all';
  filters: actions.validFilter[] = ['all', 'completed', 'pendings'];

  pendings = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.actualFilter = state.filter;
      this.pendings = state.todos.filter(todo => !todo.completed).length;
    });
  }

  setFilter(filter: actions.validFilter) {
    this.store.dispatch(actions.setFilter({filter}));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }
}
