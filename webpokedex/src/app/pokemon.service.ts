import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  URL ="http://localhost:9090/WebPokedex/rest/";

  id : Number
  getById(id : Number){
    return this.http.get<Pokemon>(this.URL + `Pokemon/${id}`);
  }

  getAll(){
    return this.http.get<Pokemon[]>(this.URL +"Pokemons");
  }
}
