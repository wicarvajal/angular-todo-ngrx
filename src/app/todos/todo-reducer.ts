import { createReducer, on } from '@ngrx/store';
import * as actions from './todo-actions';
import { Todo } from './models/todo-model';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Salvar el universo'),
  new Todo('Salvar el pais'),
  new Todo('Sobrevivir a la pandemia'),
  new Todo('Ir a comprar'),
];

const _todoReducer = createReducer(initialState,
  on(actions.createToDo, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggleToDo, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          // operador spread ... indica que retorna el resto de propiedades del objeto,
          // retornando todas las propiedades, pero editando el completed
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editToDo, (state, { id, text }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          // operador spread ... indica que retorna el resto de propiedades del objeto,
          // retornando todas las propiedades, pero editando el text
          ...todo,
          text
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.toggleAll, (state, { completed }) => {
    return state.map(todo => {
      return {
        ...todo,
        completed
      };
    });
  }),
  on(actions.deleteToDo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.clearCompleted, (state) => state.filter(todo => !todo.completed))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
