import type { CartItem } from "../interfaces/cartItem.inteface";
import { addToCart, cartArray, getTotal, removeFromCart } from "./cart";
//5. Crear un método para vaciar carrito

const cartList = document.querySelector("#cart-list") as HTMLUListElement;
const cartTemplate = document.querySelector("#cart-template") as HTMLTemplateElement; 

const cartTotal = document.querySelector("[data-cart='total']") as HTMLSpanElement;

export const renderCartList = async ()=>{
    //Vacíar HTML
    cartList.textContent = ""; 
    
    //Iterar en el array de productos para renderizar un clone por cada uno
    cartArray.forEach((cartItem) => {
        const clone = createCartItem(cartItem, cartTemplate);
        cartList.appendChild(clone);
    });

    //En el caso de carrito vacío: mensaje
    if(cartArray.length === 0){
        cartTotal.textContent = "Cart is empty"
    }else{
        cartTotal.textContent = `${getTotal().toFixed(2)} €`; 
    }
    
}

const createCartItem = (cartItem: CartItem, cartTemplate: HTMLTemplateElement)=>{

    const { title, price, quantity, id } = cartItem;

    const clone = cartTemplate.content.cloneNode(true) as HTMLLIElement;

    clone.querySelector("[data-cart='title']")!.textContent = title;
    clone.querySelector("[data-cart='price']")!.textContent = `${(price * quantity).toFixed(2)} €`;
    clone.querySelector("[data-cart='quantity']")!.textContent = `${quantity}`; 

    clone.querySelector("[data-cart='increment']")!.addEventListener("click", ()=>{
        addToCart({ title, price, id });
    });

    clone.querySelector("[data-cart='decrement']")!.addEventListener("click", ()=>{
        removeFromCart(id); 
    });

    return clone; 

}