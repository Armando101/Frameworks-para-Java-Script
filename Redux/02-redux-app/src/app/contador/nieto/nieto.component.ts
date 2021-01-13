import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() resetEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.contador = 0;
    this.resetEvent.emit(this.contador);
  }

}
