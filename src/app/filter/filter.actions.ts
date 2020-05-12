import { createAction, props } from '@ngrx/store';

export type validFilter = 'all' | 'completed' | 'pendings';

export const setFilter = createAction(
  '[Filter] setFilter',
  props<{ filter: validFilter }>()
);
