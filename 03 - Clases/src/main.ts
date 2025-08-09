
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

//Las propiedades pueden ser (ahora) public (por default), private, protected y readonly 
class Pet {

  //Sintáxis breve (typescript) para constructores 
  constructor(private name: string, private age: number){}


  //Accede con los get no accede a la propiedad directamente 
  public getMessage():string {
    return `La mascota ${this.name} tiene ${this.age} años`; 
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