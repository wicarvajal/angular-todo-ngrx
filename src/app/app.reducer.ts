import { Todo } from './todos/models/todo-model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo-reducer';
import { validFilter } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: validFilter;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};
