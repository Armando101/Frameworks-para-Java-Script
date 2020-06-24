import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(
    private router: ActivatedRoute
  ) {
    /*Recogemos los parametros que vienen el la ruta del padre*/
    this.router.parent.params.subscribe(parametros => {
      console.log('Ruta hija nuevo');
      console.log(parametros);
    });
  }

  ngOnInit(): void {
  }

}
