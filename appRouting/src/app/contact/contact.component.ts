import { Component, OnInit } from '@angular/core';
import {CONTATTI} from './listaContatti';
import {Contatto} from './contatto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contattiTest = [
    {nome: "Dario", num: "154651654"},
    {nome: "Chiara", num: "98574614"},
    {nome: "Oana", num: "4856245685"}
  ]

  contattiDaExport = CONTATTI;

  selezionato: Contatto;

  seleziona(contatto: Contatto){
    this.selezionato= contatto;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
