import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokeserv : PokemonService) { }


  Pokemons : Pokemon[];
  bianco : string = "bianco";

  ngOnInit(): void {
    this.pokeserv.getAll().subscribe(pokemonsJson =>{
      this.Pokemons = pokemonsJson;
    })
  }

  Pokemon : Pokemon

  getOne(id : Number){
    this.pokeserv.getById(id).subscribe(pokemonJson =>{
      this.Pokemon = pokemonJson;
      // console.log(this.Pokemon);
    })
  }
}
