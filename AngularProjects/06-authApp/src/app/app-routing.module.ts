import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'precios', component: PreciosComponent },
	{ path: 'protegida', component: ProtegidaComponent },
	{ path: '**', pathMatch: 'full', redirectTo:'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
