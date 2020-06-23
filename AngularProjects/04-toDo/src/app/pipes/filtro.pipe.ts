import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

/*
	Un pipe puro significa que sólo se van a llamar cuando la acción del ciclo de detección de cambios suceda en el mismo componente donde se está usando
	Si lo pongo en false, cada vez que se llame la acción de detección de cambios se va a llamar al pipe 
*/

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {

    return listas.filter(lista => lista.done === completada);
  }

}
