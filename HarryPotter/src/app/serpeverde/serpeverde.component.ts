import { Component, OnInit } from '@angular/core';
import { ConnessioneService } from '../connessione.service';

@Component({
  selector: 'app-serpeverde',
  templateUrl: './serpeverde.component.html',
  styleUrls: ['./serpeverde.component.css']
})

export class SerpeverdeComponent implements OnInit {

  constructor(private connessione: ConnessioneService) { }

  personaggi: any;
  serpeverde: Array<any> = new Array();

  ngOnInit(): void {
    this.recuperaUtenti();
  }

  recuperaUtenti(){
    this.connessione.getPersonaggi()
    .subscribe(personaggi =>{
      this.personaggi = personaggi;

      this.personaggi.forEach(per => {
        if(per.house == "Slytherin"){
          this.serpeverde.push(per);
        }       
      });
    })
  }
}
