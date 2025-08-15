import type { Pokemon } from "../models/pokemon.model";
import { PokemonService } from "../services/pokemon.service";

export enum GameState {
    LOADING = "loading",
    PLAYING = "playing",
    CORRECT = "correct",
    WRONG = "wrong"
}

export class GameManager {
    private _currentPokemon: Pokemon | null = null;
    private _score: number = 0;
    private _gameState: GameState = GameState.LOADING; 

    get currentPokemon(){
        return this._currentPokemon;
    }

    get score(){
        return this._score;
    }

    get gameState(){
        return this._gameState; 
    }

    //Inizializar el juego con un pokemons aleartorio

    public async startNewGame(){
        this._gameState = GameState.LOADING;

        try {
            this._currentPokemon = await PokemonService.getRandomPokemon();
            this._gameState = GameState.PLAYING;

        } catch (error) {
            console.log("Error PokeAPI");
            this._gameState = GameState.WRONG; 
            throw error; 
        }
    }

    //Procesar la respuesta del cliente

    public makeGuess(guess: string){
        if(!this._currentPokemon || this._gameState !== GameState.PLAYING){
            console.error("Error");
            return; 
        }

        const isCorrect = this.currentPokemon?.isNameCorrect(guess);

        if(isCorrect){
            this._score++;
            this._gameState = GameState.CORRECT;
            this.celebrateCorrectAnswer();
        }else{
            this._gameState = GameState.WRONG;
        }

    }

    private celebrateCorrectAnswer(){
        console.log("YEAH"); 
    }

    public async nextPokemon(){
        await this.startNewGame(); 
    }
}