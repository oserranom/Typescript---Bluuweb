import { Pokemon } from "../models/pokemon.model";

export class PokemonService {
    private static readonly API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";
    private static readonly MAX_POKEMON_ID = 151; 

    public static async getRandomPokemon(){
        try {
            const randomId = Math.floor(Math.random() * this.MAX_POKEMON_ID) + 1;

            const response = await fetch(`${this.API_BASE_URL}/${randomId}`);

            if(!response.ok){
                throw new Error ("No se ha podido obtener el Pokemon"); 
            }

            const data = await response.json();

            return new Pokemon(data.id, data.name, data.sprites.front_default); 
            
        } catch (error) {
            console.log("Error en PokéAPI");
            throw error; 
        }
    }
}