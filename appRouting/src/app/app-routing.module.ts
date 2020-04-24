import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ATTENZIONE -> fare import dei nostri singoli component
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {IscrizioneComponent} from './iscrizione/iscrizione.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'iscriviti',component: IscrizioneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
