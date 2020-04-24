import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../config.service';
import { ToDo } from '../to-do'


@Component({
  selector: 'app-to-do-list-list',
  templateUrl: './to-do-list-list.component.html',
  styleUrls: ['./to-do-list-list.component.css']
})
export class ToDoListListComponent implements OnInit {

  formToDo: FormGroup;
  cosaDaFare: string;
  priorita: number;
  contatoreId: number;
  lista: any;

  constructor(private costruttoreForm: FormBuilder, private data: ConfigService) {
    this.contatoreId = 0;
  }

  ngOnInit(): void {
    this.formToDo = this.costruttoreForm.group({
      cosaDaFare: ['', Validators.required],
      priorita: ['', Validators.required]
    });

    this.data.getList()
      .subscribe(lista => {
        console.log("Scaricamento avvenuto");
        this.lista = lista;

        this.lista.forEach(item => {
          this.contatoreId=item.id;
          console.log(this.contatoreId);
        });
      });
  }

  onSubmit() {
    console.log("Entro");
    this.cosaDaFare = this.formToDo.controls["cosaDaFare"].value;
    this.priorita = this.formToDo.controls["priorita"].value;

    let item: ToDo= new ToDo(++this.contatoreId,this.cosaDaFare,this.priorita,false);

    this.data.postInsertItem(item)
      .subscribe(response => {
        console.log("Inseriemnto avvenuto");
      })
  }
}