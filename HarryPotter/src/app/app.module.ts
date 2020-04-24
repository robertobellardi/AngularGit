import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GrifondoroComponent } from './grifondoro/grifondoro.component';
import { SerpeverdeComponent } from './serpeverde/serpeverde.component';
import { CorvoneroComponent } from './corvonero/corvonero.component';
import { TassorossoComponent } from './tassorosso/tassorosso.component';

import {HttpClientModule} from '@angular/common/http';
import { StudentiComponent } from './studenti/studenti.component';
import { ProfessoriComponent } from './professori/professori.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GrifondoroComponent,
    SerpeverdeComponent,
    CorvoneroComponent,
    TassorossoComponent,
    StudentiComponent,
    ProfessoriComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
