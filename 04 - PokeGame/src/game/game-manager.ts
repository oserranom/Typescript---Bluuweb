import type { Pokemon } from "../models/pokemon.model";

export enum GameState {
    LOADING = "loading",
    PLAYING = "playing",
    CORRECT = "correct",
    WRONG = "wrong"
}

export class GameManager {
    private _currentPokemon: Pokemon | null;
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
}