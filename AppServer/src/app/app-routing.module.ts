import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { HomeComponent } from './home/home.component';
import { AggiungiProdottoComponent } from './aggiungi-prodotto/aggiungi-prodotto.component';
import { AggiungiMagazzinoComponent } from './aggiungi-magazzino/aggiungi-magazzino.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'magazzino', component: MagazzinoComponent },
  { path: 'prodotto', component: ProdottoComponent },
  { path: 'aggiungiProdotto', component: AggiungiProdottoComponent },
  { path: 'aggiungiMagazzino', component: AggiungiMagazzinoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
