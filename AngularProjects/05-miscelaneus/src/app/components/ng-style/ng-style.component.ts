import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!--<p [ngStyle]="{'font-size': size + 'px', 'color': 'cyan'}">-->
    
    <p [style.fontSize.px]="size">
      Hola mundo... esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="size = size+5"><i class="fa fa-plus"></i></button>
    <button class="btn btn-primary" (click)="size = size-5"><i class="fa fa-minus"></i></button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  public size:number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
