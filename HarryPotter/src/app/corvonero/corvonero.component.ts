import { Component, OnInit } from '@angular/core';
import { ConnessioneService } from '../connessione.service';

@Component({
  selector: 'app-corvonero',
  templateUrl: './corvonero.component.html',
  styleUrls: ['./corvonero.component.css']
})

export class CorvoneroComponent implements OnInit {

  constructor(private connessione: ConnessioneService) { }

  personaggi: any;
  corvonero: Array<any> = new Array();

  ngOnInit(): void {
    this.recuperaUtenti();
  }

  recuperaUtenti(){
    this.connessione.getPersonaggi()
    .subscribe(personaggi =>{
      this.personaggi = personaggi;

      this.personaggi.forEach(per => {
        if(per.house == "Ravenclaw"){
          this.corvonero.push(per);
        }       
      });
    })
  }
}
