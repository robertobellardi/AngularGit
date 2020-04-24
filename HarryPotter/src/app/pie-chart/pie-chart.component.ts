import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'ng2-charts';
import { ConnessioneService } from '../connessione.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  // Pie

  personaggi: any;
  purosangue: number = 0;
  messosangue: number = 0;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['puro sangue', 'mezzo sangue'];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
    },
  ];

  constructor(private connessione: ConnessioneService) { }

  ngOnInit() {
    this.recuperaUtenti();
  }

  recuperaUtenti() {
    this.connessione.getPersonaggi()
      .subscribe(personaggi => {
        this.personaggi = personaggi;
        this.personaggi.forEach(per => {
          if (per.ancestry == "half-blood")
            this.purosangue++;
          else
            this.messosangue++;
        });
        this.pieChartData = [this.purosangue, this.messosangue];
      })
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }
}
