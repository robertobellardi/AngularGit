import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'ng2-charts';
import { Label } from 'ng2-charts';
import { ConnessioneService } from '../connessione.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  personaggi: any;
  grifondoro: number = 0;
  serpeverde: number = 0;
  corvonero: number = 0;
  tassorosso: number = 0;
  studenti: number = 0;
  professori: number = 0;
  tutti: number = 0;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Grifondoro', 'Serpeverde', 'Tassorosso', 'Corvonero', 'Professori', 'Studenti', 'Tutti'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [{}];

  constructor(private connessione: ConnessioneService) { }

  ngOnInit() {
    this.recuperaPersonaggi();
  }

  recuperaPersonaggi() {
    this.connessione.getPersonaggi()
      .subscribe(personaggi => {
        this.personaggi = personaggi;
        this.personaggi.forEach(per => {
          if (per.house == "Gryffindor")
            this.grifondoro++;
          else if (per.house == "Slytherin")
            this.serpeverde++;
          else if (per.house == "Ravenclaw")
            this.corvonero++;
          else if (per.house == "Hufflepuff")
            this.tassorosso++;

          if (per.hogwartsStudent && !per.hogwartsStaff)
            this.studenti++;
          else if (!per.hogwartsStudent && per.hogwartsStaff)
            this.professori++;

          this.tutti++;
        });

        this.barChartData = [{
          data: [this.grifondoro, this.serpeverde, this.corvonero, this.tassorosso, this.professori, this.studenti,this.tutti],
          label: "Numeri"
        }];
      })
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}