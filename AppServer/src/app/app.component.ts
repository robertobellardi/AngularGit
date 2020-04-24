import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { Pokemon } from './pokemon';
import { Transazione } from './transazione';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppServer';

  constructor(private data: ConfigService) { }

  // pokemon: any;

  // recuperaPokemon() {
  //   this.data.getData()
  //     .subscribe(pokemonJson => {
  //       this.pokemon = pokemonJson;
  //       console.log(this.pokemon);
  //     })
  // }
/*
  pokemons: Pokemon[];

  recuperaPokemon() {
    this.data.getData()
      .subscribe((pokemonJson: Pokemon[]) =>{
        this.pokemons = pokemonJson;
        console.log(this.pokemons);
      })
  }

  newPokemon = {
    id: "5",
    nome: "Charizard",
    tipo: "drago"
  };

  inserisciPokemon(){
    this.data.postData(this.newPokemon)
    .subscribe(response => {
      console.log("Inseriemnto avvenuto");
      console.log(response);
    })
  }

  transazioni: any;

  scaricaMagazzino(){
    this.data.getProdotti()
    .subscribe(transazioni => {
      console.log("Scaricamento avvenuto");
      this.transazioni = transazioni;
      console.log(this.transazioni);
    })
  }*/
}
