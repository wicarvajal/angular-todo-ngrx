import { createAction, props } from '@ngrx/store';

export const createToDo = createAction(
  '[TODO] Create ToDo',
  props<{text: string}>()
);

export const toggleToDo = createAction(
  '[TODO] Toggle ToDo',
  props<{id: number}>()
);

export const editToDo = createAction(
  '[TODO] Edit ToDo',
  props<{id: number, text: string}>()
);

export const deleteToDo = createAction(
  '[TODO] Delete ToDo',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODO] Toggle all Todos',
  props<{completed: boolean}>()
);

export const clearCompleted = createAction(
  '[TODO] Clear completed Todos'
);
