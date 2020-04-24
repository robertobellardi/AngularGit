import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private htpp: HttpClient) { }

  url = 'http://localhost:4200';

  getData(){
    return this.htpp.get(this.url+"/pokemon");
  }

  getProdotti(){
    return this.htpp.get("http://localhost:9090/magazzino/prodottirest");
  }

  getTransazioni(){
    return this.htpp.get("http://localhost:9090/magazzino/magazzinorest");
  }

  postData(obj){
    return this.htpp.post(this.url+"/pokemon",obj);
  }
}
