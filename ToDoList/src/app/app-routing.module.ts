import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ToDoListListComponent} from '../app/to-do-list-list/to-do-list-list.component';


const routes: Routes = [
  {path:'lista',component: ToDoListListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
