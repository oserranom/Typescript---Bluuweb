
//Objetos literales...
/*
const pet = {
  name: "Luna",
  age: 1,
  type: "dog"
} */

//Clases
//Inferencia directa no necesita tipar pero sí requiere valor por default 
//Se puede evitar valor por default con el assertion operator (!)
class Pet {
  name = ""; 
  age = 0;
}

const myPet = new Pet();

myPet.name = "Mochi";
myPet.age = 5;


console.log(); 