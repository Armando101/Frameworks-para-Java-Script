import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

export const usuarioRoutes: Routes = [
 	{ path: 'nuevo', component: UsuarioNuevoComponent },
 	{ path: 'editar', component: UsuarioEditarComponent },
 	{ path: 'detalle', component: UsuarioDetalleComponent },
	{ path: '**', pathMatch:'full', redirectTo:'nuevo' },
];

@NgModule({
  imports: [RouterModule.forRoot(usuarioRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
