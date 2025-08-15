export class Pokemon {
    public id: number;
    public name: string;
    public imageURL: string;

    constructor(id: number, name: string, imageURL: string){
        this.id = id;
        this.name = name;
        this.imageURL = imageURL; 
    }

    public isNameCorrect(guess: string){
        return(
            this.name.toLocaleLowerCase().trim() === guess.toLocaleLowerCase().trim()
        );
    }
}