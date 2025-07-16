import './style.css'

//Variables
const age = 33;
const name = 'Oscar';

//Objects e interfaces
interface Persona {
  name: string;
  age: number;
  lastName?: string; //con "?" damos la posibilidad de usar o no este atributo
}

const persona1: Persona = {
  name,
  age
}

console.log(persona1); 

//En TS la inferencia es automática en declaraciones de variables primitivas
//Siempre se puede forzar añadiendo detrás del nombre ": type"

//En arrays de objetos y objetos complejos sí requerimos tipar datos, para tipar objetos tenemos las interface
//el objeto persona1 es un objeto de tipo "Persona"

//Functions

function hello(name: string){
  return `Hello ${name}`;
}

console.log(hello('Oscar')); 


//Ejercicio 1, classic counter
//tipamos elementos del DOM de la siguiente manera "as HTMLElementType"

const counter = document.querySelector("#counter") as HTMLSpanElement;
const btnIncrement = document.querySelector("#btnIncrement") as HTMLButtonElement; 
const btnReset = document.querySelector("#reset") as HTMLButtonElement;

let totalCount = 0;

btnIncrement.addEventListener("click", ()=>{
  totalCount++;
  counter.textContent = totalCount.toString(); 
});

btnReset.addEventListener("click", ()=>{
  totalCount = 0;
  counter.textContent = totalCount.toString(); 
}); 



