import { Component, OnInit } from '@angular/core';
import { ConnessioneService } from '../connessione.service';

@Component({
  selector: 'app-professori',
  templateUrl: './professori.component.html',
  styleUrls: ['./professori.component.css']
})

export class ProfessoriComponent implements OnInit {

  constructor(private connessione: ConnessioneService) { }

  professori: any;

  ngOnInit(): void {
    this.recuperaUtenti();
  }

  recuperaUtenti(){
    this.connessione.getProfessori()
    .subscribe(personaggi =>{
      this.professori = personaggi;
    })
  }
}
