import './style.css';


//Array de primitivos no es necesario ser tipado, en caso contrario sí
const fruitList: string[] = ["apple", "banana", "orange", "grape", "kiwi"]; 

const ulFruitList = document.querySelector("#fruitlist") as HTMLUListElement;

fruitList.forEach((fruit) =>{
    const liFruit = document.createElement("li");
    liFruit.textContent = fruit;
    ulFruitList.appendChild(liFruit);
}); 