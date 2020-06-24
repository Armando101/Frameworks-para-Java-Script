import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
  <hr>
  <app-css></app-css>
  <p>Hello world from app.component</p>

  <app-clases></app-clases>
  
  <p [appResaltado]="'orange'">
    Hola mundo
  </p>
  
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
