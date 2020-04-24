import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aggiungi-prodotto',
  templateUrl: './aggiungi-prodotto.component.html',
  styleUrls: ['./aggiungi-prodotto.component.css']
})
export class AggiungiProdottoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}

$(document).ready(function () {
  $("#aggiungiProdotto").click(aggiungiEvento);
});

function aggiungiEvento() {
  console.log("Aggiungi evento");
  var descrizione = $("#inputDescrizione").val();
  var prezzo = $("#inputPrezzo").val();
  console.log(descrizione + " - " + prezzo);
}