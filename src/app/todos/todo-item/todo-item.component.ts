import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo-model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleToDo, editToDo, deleteToDo } from '../todo-actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtPhysicInput') txtPhysicInput: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;
  editing = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(value => {
      console.log(value);
      this.store.dispatch(toggleToDo({ id: this.todo.id }));
    });
  }

  editItem() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtPhysicInput.nativeElement.select();
    }, 1);
  }

  saveEdition() {
    this.editing = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.text) { return; }

    this.store.dispatch(
      editToDo({
        id: this.todo.id,
        text: this.txtInput.value
      })
    );
  }

  deleteItem() {
    this.store.dispatch(deleteToDo({id: this.todo.id}));
  }

}
