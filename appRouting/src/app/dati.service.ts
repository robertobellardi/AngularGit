import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  constructor(private http: HttpClient) { }

  provaInjClick(){
    console.log("Hai cliccato utilizzando il metodo nel DatiService.ts");
  }

  url = "https://reqres.in/api/users";
  urlmagazzino = "http://localhost:9004/rest";

  getutenti(){
    return this.http.get(this.url);
  }

  getProdotti(){
    return this.http.get(this.urlmagazzino);
  }
}
