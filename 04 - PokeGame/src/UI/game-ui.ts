import {GameManager} from "../game/game-manager"

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

    public updateUI(){}

    private async handleNextPokemon(){}

    private showFeedback(message: string, type: string){
        this.feedbackElement.innerHTML`
            <div class="alert alert-${type}">
                ${message}
            </div>
        `

        setTimeout(()=>{
            this.feedbackElement.innerHTML = "";
        }, 3000); 
    }
}