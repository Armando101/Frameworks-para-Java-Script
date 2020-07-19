import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe: HeroeModel = new HeroeModel();

  constructor() { }

  ngOnInit(): void {
  }


  guardar(form: NgForm): any {
    if (form.invalid) {
      console.log('Formulario invalido');
      return;
    }
    console.log(form);
    console.log(this.heroe);
  }

}
