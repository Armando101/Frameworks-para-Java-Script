import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activated: boolean): string {
    return ((activated) ? '*'.repeat(value.length) : value);
    /*if (activated) {
    	let pass = value.split('');
    	pass = pass.map((letter) => {
    		return '*';
    	});
    	value = pass.join('');
    }
    return value;
  	*/
  }
}
