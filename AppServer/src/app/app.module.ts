import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { HomeComponent } from './home/home.component';
import { AggiungiProdottoComponent } from './aggiungi-prodotto/aggiungi-prodotto.component';
import { AggiungiMagazzinoComponent } from './aggiungi-magazzino/aggiungi-magazzino.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MagazzinoComponent,
    ProdottoComponent,
    HomeComponent,
    AggiungiProdottoComponent,
    AggiungiMagazzinoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
