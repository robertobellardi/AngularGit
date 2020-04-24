import { Component, OnInit } from '@angular/core';
import { ConnessioneService } from '../connessione.service';

@Component({
  selector: 'app-tassorosso',
  templateUrl: './tassorosso.component.html',
  styleUrls: ['./tassorosso.component.css']
})

export class TassorossoComponent implements OnInit {

  constructor(private connessione: ConnessioneService) { }

  personaggi: any;
  tassorosso: Array<any> = new Array();

  ngOnInit(): void {
    this.recuperaUtenti();
  }

  recuperaUtenti(){
    this.connessione.getPersonaggi()
    .subscribe(personaggi =>{
      this.personaggi = personaggi;

      this.personaggi.forEach(per => {
        if(per.house == "Hufflepuff"){
          this.tassorosso.push(per);
        }       
      });
    })
  }
}
