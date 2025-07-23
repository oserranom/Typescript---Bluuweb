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
const formFruit = document.querySelector("#formFruit") as HTMLFormElement;
const fruitInput = document.querySelector("#fruitInput") as HTMLInputElement;
const colorInput = document.querySelector("#colorInput") as HTMLInputElement;

formFruit.addEventListener("submit", (e) =>{
    e.preventDefault();
    const newFruit: Fruit = {
        color: colorInput.value,
        name: fruitInput.value 
    } 

    fruitList.push(newFruit);
    renderFruits(); 
});

const renderFruits = ()=>{

    ulFruitList.textContent = "";

    fruitList.forEach((fruit) =>{
        const liFruit = document.createElement("li");
        liFruit.textContent = `${fruit.name} - ${fruit.color}`;
        ulFruitList.appendChild(liFruit);
    }); 
}

renderFruits(); 

interface dbUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}


const userList = document.querySelector("#userList") as HTMLUListElement;

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users: dbUser[]) => {
        users.forEach((user: dbUser) =>{
            const userLi = document.createElement("LI");
            userLi.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(userLi); 
        })
    }); 


