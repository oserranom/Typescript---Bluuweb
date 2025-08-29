import { GameManager } from './game/game-manager';
import { GameUI } from './UI/game-ui';
import './style.css'


class App{
    private gameManager: GameManager; 
    private gameUI: GameUI; 

    constructor(){
        this.gameManager = new GameManager();
        this.gameUI = new GameUI(this.gameManager);
    }

    public async init(){
        try {
            
        } catch (error) {
            
        }
    }
}
