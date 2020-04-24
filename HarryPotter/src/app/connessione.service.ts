import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnessioneService {

  constructor(private http: HttpClient) { }

  urlPersonaggi="http://hp-api.herokuapp.com/api/characters";
  urlStudenti="http://hp-api.herokuapp.com/api/characters/students";
  urlProfessori="http://hp-api.herokuapp.com/api/characters/staff";

  getPersonaggi(){
    return this.http.get(this.urlPersonaggi);
  }

  getStudenti(){
    return this.http.get(this.urlStudenti);
  }

  getProfessori(){
    return this.http.get(this.urlProfessori);
  }
}
