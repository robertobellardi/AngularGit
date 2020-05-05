import { Mosse } from './mosse';

export interface Pokemon {
    id : Number
    nome : string
    tipo1 : string
    tipo2 : string
    totale : Number
    salute : Number
    attacco: Number
    difesa : Number
    attaccoSpeciale : Number
    difesaSpeciale : Number
    velocita : Number
    img : string
    listaMosse : Mosse[]
}
