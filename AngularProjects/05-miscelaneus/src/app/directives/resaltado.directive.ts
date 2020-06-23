import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

	@Input("appResaltado") nuevoColor:string;

  constructor(
  	private element:ElementRef
  ) { 
  	console.log('Directiva llamada');
  	// element.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseenter') mouseEnter() {
  	this.resaltar(this.nuevoColor || 'yelow');
  }

  @HostListener('mouseleave') mouseLeave() {
  	// this.element.nativeElement.style.backgroundColor="blue";
  	this.resaltar(null);
  }

  private resaltar(color:string) {
  	this.element.nativeElement.style.backgroundColor = color;
  }

}
