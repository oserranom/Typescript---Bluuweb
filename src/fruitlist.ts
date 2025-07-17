import './style.css';


//Array de primitivos no es necesario ser tipado, en caso contrario sí
//const fruitList: string[] = ["apple", "banana", "orange", "grape", "kiwi"]; 

//Para tipar un array de primitivos usamos "string[]", para objetos usamos "Array<type>" o "type[]"

interface Fruit {
    name: string;
    color: string;
}

const fruitList: Fruit[] = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "orange", color: "orange" },
    { name: "grape", color: "purple" },
    { name: "kiwi", color: "green" }
];

const ulFruitList = document.querySelector("#fruitlist") as HTMLUListElement;

fruitList.forEach((fruit) =>{
    const liFruit = document.createElement("li");
    liFruit.textContent = `${fruit.name} - ${fruit.color}`;
    ulFruitList.appendChild(liFruit);
}); 