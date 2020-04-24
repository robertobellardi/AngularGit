import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  constructor(private data: ConfigService) { }

  prodotti: any;

  ngOnInit(): void {
    console.log("Start prodotto init");
    this.data.getProdotti()
    .subscribe(prodotti => {
      console.log("Scaricamento avvenuto");
      this.prodotti = prodotti;
      //console.log(this.prodotti);
    })
  }

}
