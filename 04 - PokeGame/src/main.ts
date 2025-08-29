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
            await this.gameManager.startNewGame();
            this.gameUI.updateUI(); 
        } catch (error) {
            console.log(error);
        }
    }
}

document.addEventListener("DOMContentLoaded", async()=>{
    const app = new App();
    await app.init();
}); 
