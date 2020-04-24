import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrifondoroComponent } from './grifondoro/grifondoro.component';
import { SerpeverdeComponent } from './serpeverde/serpeverde.component';
import { CorvoneroComponent } from './corvonero/corvonero.component';
import { TassorossoComponent } from './tassorosso/tassorosso.component';
import { StudentiComponent } from './studenti/studenti.component';
import { ProfessoriComponent } from './professori/professori.component';
import { BarChartComponent } from './bar-chart/bar-chart.component'
import { PieChartComponent } from './pie-chart/pie-chart.component'

const routes: Routes = [
  { path: 'studenti', component: StudentiComponent },
  { path: 'professori', component: ProfessoriComponent },
  { path: 'grifondoro', component: GrifondoroComponent },
  { path: 'serpeverde', component: SerpeverdeComponent },
  { path: 'corvonero', component: CorvoneroComponent },
  { path: 'tassorosso', component: TassorossoComponent },
  { path: 'graficoBarre', component: BarChartComponent },
  { path: 'graficoTorta', component: PieChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
