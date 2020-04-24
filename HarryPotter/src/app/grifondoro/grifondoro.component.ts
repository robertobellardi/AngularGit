import { Component, OnInit } from '@angular/core';
import { ConnessioneService } from '../connessione.service';

@Component({
  selector: 'app-grifondoro',
  templateUrl: './grifondoro.component.html',
  styleUrls: ['./grifondoro.component.css']
})

export class GrifondoroComponent implements OnInit {

  constructor(private connessione: ConnessioneService) { }

  personaggi: any;
  grifondoro: Array<any> = new Array();

  ngOnInit(): void {
    this.recuperaUtenti();
  }

  recuperaUtenti(){
    this.connessione.getPersonaggi()
    .subscribe(personaggi =>{
      this.personaggi = personaggi;

      this.personaggi.forEach(per => {
        if(per.house == "Gryffindor"){
          this.grifondoro.push(per);
        }       
      });
    })
  }
}