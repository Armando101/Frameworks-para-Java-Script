import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-sidebar',
  templateUrl: './grafico-sidebar.component.html',
  styleUrls: ['./grafico-sidebar.component.css']
})
export class GraficoSidebarComponent {

  resultados: any[] = [
    {
      'name': 'Juego 1',
      'value': 20
    },
    {
      'name': 'Juego 2',
      'value': 25
    },
    {
      'name': 'Juego 3',
      'value': 2
    },
    {
      'name': 'Juego 4',
      'value': 2
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'PopulatVotosion';

  colorScheme = 'nightLights';

  constructor() {}

  onSelect(event) {
    console.log(event);
  }
}
