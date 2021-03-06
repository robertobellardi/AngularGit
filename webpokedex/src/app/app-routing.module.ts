import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PokedexComponent } from './pokedex/pokedex.component';




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
