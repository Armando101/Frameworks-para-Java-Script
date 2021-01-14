import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.select('contador').subscribe(contador => {
      console.log(contador);
      this.contador = contador;
    });
  }

  incrementar() {
    // this.contador++;
    this.store.dispatch(actions.increment());
  }

  decrementar() {
    // this.contador--;
    this.store.dispatch(actions.decrement());
  }

}
