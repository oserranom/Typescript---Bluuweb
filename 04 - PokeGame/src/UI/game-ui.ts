import {GameManager, GameState} from "../game/game-manager"

export class GameUI{
    private guessInput!:HTMLInputElement;
    private form!: HTMLFormElement;
    private nextButton!: HTMLButtonElement;
    private guessButton!: HTMLButtonElement;
    private pokemonContainer!: HTMLDivElement;
    private score!: HTMLSpanElement;
    private feedbackElement!: HTMLDivElement;

    constructor(private gameManager: GameManager){
        this.initializeUI();
        this.bindEvents(); 

    }

    private initializeUI(){
        this.guessInput = document.getElementById("guess-input") as HTMLInputElement; 
        this.form = document.getElementById("form") as HTMLFormElement;
        this.nextButton = document.getElementById("next-pokemon") as HTMLButtonElement;
        this.guessButton = document.getElementById("submit-guess") as HTMLButtonElement;
        this.pokemonContainer = document.getElementById("pokemon-container") as HTMLDivElement;
        this.score = document.getElementById("score") as HTMLSpanElement;
        this.feedbackElement = document.getElementById("feedback") as HTMLDivElement; 
    }

    private bindEvents(){
        this.form.addEventListener("submit", e =>{
            e.preventDefault();
            this.handleGuess();
        })
        this.nextButton.addEventListener("click", ()=>{
            this.handleNextPokemon();
        })
    }

    private handleGuess(){
        const guess = this.guessInput.value.trim();
        if(!guess){
            this.showFeedback("Por favor escribe un nombre", "warning");
            return;
        }

        this.gameManager.makeGuess(guess);
        this.updateUI();
        this.guessInput.value = ""; 
    }

    public updateUI(){
        const pokemon = this.gameManager.currentPokemon;
        const gameState = this.gameManager.gameState;

        //Actualizar la puntuación
        this.score.textContent = this.gameManager.score.toString(); 

        if(gameState === GameState.LOADING){
            this.pokemonContainer.classList.remove("display-none"); 
        }else if(pokemon){
            const isRevealed = gameState === GameState.CORRECT || gameState === GameState.WRONG
            console.log(pokemon.imageURL); 
            this.pokemonContainer.innerHTML = `
                <div class="pokemon-image-container">
                    <img src="${pokemon.imageURL}"
                        alt="Pokemon misterioso"
                        class="pokemon-image ${isRevealed ? "" : "pokemon-silhuette"}"
                    />
                </div>
            `
        }

        this.updateControls(gameState);
        this.updateFeedback(gameState); 
    }

    private updateControls(gameState: GameState){
        switch(gameState){
            case GameState.PLAYING:
                this.guessInput.disabled = false;
                this.guessButton.disabled = false; 
                this.nextButton.classList.add("display-none");
                break;
            case GameState.CORRECT:
            case GameState.WRONG:
                this.guessInput.disabled = true;
                this.guessButton.disabled = true;
                this.nextButton.classList.remove("display-none"); 
        }
    }

    private updateFeedback(gameState: GameState){
        const pokemon = this.gameManager.currentPokemon;

        switch(gameState){
            case GameState.CORRECT:
                this.feedbackElement.innerHTML = `
                    <div class="alert-success">
                        <h4> CORRECTO! </h4>
                        <p>Es <strong>${pokemon?.name}</strong></p>
                    </div>
                `
            break;

            case GameState.WRONG:
                this.feedbackElement.innerHTML = `
                    <div class="alert-danger">
                        <h4> INCORRECTO </h4>
                        <p>Era <strong>${pokemon?.name}</strong></p>
                    </div>
                `
            break;

            default:
                this.feedbackElement.innerHTML = ""; 
        }
    }

    private async handleNextPokemon(){
        try {
            await this.gameManager.nextPokemon();
            this.updateUI();
            this.guessInput.focus();
        } catch (error) {
            this.showFeedback("Error al cargar el siguiente POkemon", "danger");
        }
    }

    private showFeedback(message: string, type: string){
        this.feedbackElement.innerHTML  = `
            <div class="alert alert-${type}">
                ${message}
            </div>
        `

        setTimeout(()=>{
            this.feedbackElement.innerHTML = "";
        }, 3000); 
    }
}