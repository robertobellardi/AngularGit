import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';
import { element } from 'protractor';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // per utilizzare il metodo creato nel service devo
  // 1 importare il service
  // 2 creare un' istanza all' interno della funzione costruttore
  // 3 richiamare il metodo

  constructor(private dati: DatiService) { }

  ngOnInit(): void {
    this.recuperaUtenti();
    //this.recuperaProdotti(); bisogna implementare il servizio da spring ---> manca l'invio dei dati
  }

  provaClick(){
    this.dati.provaInjClick();
  }

  utenti: any;
  prodotti: any;

  recuperaUtenti(){
    this.dati.getutenti()
    .subscribe(users =>{
      this.utenti = users;
      console.log(this.utenti);
      this.stampaUtenti(this.utenti);      
        /*
        console.log(
          this.utenti["data"][i]["first_name"] + " - " +
          this.utenti["data"][i]["last_name"] + " - " +
          this.utenti["data"][i]["avatar"]);*/
        
    })
  }

  stampaUtenti(utenti: Object){
    for(var i=0;i<utenti["data"].length;i++){
      var card=$("<div class='card text-white bg-dark mb-3' style='width: 18rem;'><div>");
      var img=$("<img class='card-img-top' src='"+utenti["data"][i]["avatar"]+"' alt='"+utenti["data"][i]["avatar"]+"'>");
      var body=$("<div class='card-body'></div>");
      var nome=$("<p>Nome: "+utenti["data"][i]["first_name"]+"</p>");
      var cognome=$("<p>Cognome: "+utenti["data"][i]["last_name"]+"</p>");

      body.append(nome);
      body.append(cognome);
      card.append(img);
      card.append(body);

      $(".btn").after(card);
    }
  }

  recuperaProdotti(){
    this.dati.getProdotti()
    .subscribe(prodotti =>{
      this.prodotti = prodotti;
      console.log(this.prodotti);       
    })
  }
}
