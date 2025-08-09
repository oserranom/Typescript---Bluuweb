
//Objetos literales...
/*
const pet = {
  name: "Luna",
  age: 1,
  type: "dog"
} */

//Clases
//Inferencia directa no necesita tipar pero sí requiere valor por default 
//Se puede evitar valor por default con el assertion operator (!) pero no recomendable 

interface IPet {
  name: string;
  age: number;
  getMessage(): string; 
}
//IMPLEMENTS, se utiliza para decir a una clase como debe estar formada como mínimo aportando una interface 

//Las propiedades pueden ser (ahora) public (por default), private, protected y readonly 
class Pet implements IPet {

  //Sintáxis breve (typescript) para constructores 
  constructor(public name: string, public age: number){}


  //Accede con los get no accede a la propiedad directamente 
  public getMessage():string {
    return `La mascota ${this.name} tiene ${this.age} años`; 
  }

  static getInstance(): string{
    return `I'm static method with no instance call me with Pet.getInstance()`; 
  }
  
}

const myPet = new Pet("Mochi", 5);

console.log("CLASES: ")

console.log(myPet); 
console.log(myPet.getMessage()); 

//HERENCIA
class Dog extends Pet{
  constructor(
    name: string,
    age: number,
    public breed: string
  ){
    super(name, age);
  }

  public bark(): void{
    console.log("Woof! Woof!"); 
  }

  //POLIMORFISMO
  public getMessage(): string {
    return `${super.getMessage()} y es de raza ${this.breed}`
  }
}

const myDog = new Dog("Cuqui", 2, "Chiwawa");

console.log("HERENCIA: ");
console.log(myDog);

console.log("POLIMORFISMO: ");
console.log(myDog.getMessage()); 

//Abstract class:
//Es como una plantilla de clase, no se puede instanciar directamente.
//Sirve como base para otras clases que sí puedan ser instanciadas. 

//Static method:
//Son métodos definidos dentro de una clase pero que no necesitan una instancia de clase para ser llamados, ej:
console.log("STATIC METHOD: ")
console.log(Pet.getInstance());

