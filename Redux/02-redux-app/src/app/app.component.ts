import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 10;
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      console.log(state);
      this.contador = state.count;
    });
  }

  incrementar(): void {
    this.store.dispatch(actions.increment());
  }

  decrementar(): void {
    this.store.dispatch(actions.decrement());
  }
}
