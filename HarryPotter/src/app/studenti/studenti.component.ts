import { Component, OnInit } from '@angular/core';
import { ConnessioneService } from '../connessione.service';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})

export class StudentiComponent implements OnInit {

  constructor(private connessione: ConnessioneService) { }

  studenti: any;

  ngOnInit(): void {
    this.recuperaUtenti();
  }

  recuperaUtenti(){
    this.connessione.getStudenti()
    .subscribe(personaggi =>{
      this.studenti = personaggi;       
      });
  }
}
