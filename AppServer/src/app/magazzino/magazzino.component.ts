import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent implements OnInit {

  constructor(private data: ConfigService) { }

  transazioni: any;

  ngOnInit(): void {
    console.log("Start magazzino init");
    this.data.getTransazioni()
    .subscribe(transazioni => {
      console.log("Scaricamento avvenuto");
      this.transazioni = transazioni;
      //console.log(this.transazioni);
    })
  }

}
