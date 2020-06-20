import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Para idiomas
/*
Doc:
https://angular.io/guide/i18n#setting-up-the-locale-of-your-app
*/
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  	{
  		provide: LOCALE_ID,
  		useValue: 'es'
  	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
