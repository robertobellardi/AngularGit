import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListHeaderComponent } from './to-do-list-header/to-do-list-header.component';
import { ToDoListFooterComponent } from './to-do-list-footer/to-do-list-footer.component';
import { ToDoListListComponent } from './to-do-list-list/to-do-list-list.component';
import { ToDoListItemComponent } from './to-do-list-item/to-do-list-item.component';

//ReactiveForms
import { ReactiveFormsModule } from '@angular/forms';

//Modulo HTTP
import { HttpClientModule } from '@angular/common/http';
import { TodolistloginComponent } from './todolistlogin/todolistlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListHeaderComponent,
    ToDoListFooterComponent,
    ToDoListListComponent,
    ToDoListItemComponent,
    TodolistloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
