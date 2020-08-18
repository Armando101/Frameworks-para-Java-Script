import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoSidebarComponent } from './grafico-sidebar/grafico-sidebar.component';


@NgModule({
  declarations: [NavbarComponent, GraficoSidebarComponent],
  exports: [
    NavbarComponent,
    GraficoSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
