import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Importamos mi-componente
import { MiComponente } from './components/mi-componente/mi-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    // Incluimos el componente recién importado para poder utilizarlo.
    MiComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
