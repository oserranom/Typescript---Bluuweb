import type { CartItem } from "../interfaces/cartItem.inteface";
import { renderCartList } from "./cart-list";

//1. Definir variable carrito CartItem[]
export const cartArray: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]"); 


//2. Crear un método para agregar item al carrito
interface ItemAddedToCart{
    title: string;
    id: number;
    price: number;
}

export const addToCart = ({title, id, price}: ItemAddedToCart) =>{
    const itemInCart = cartArray.find((cartItem) => cartItem.id === id);
    if(itemInCart){
        itemInCart.quantity ++;
    }else{
        cartArray.push({title, id, price, quantity: 1}); 
    }
    
    localStorage.setItem("cart", JSON.stringify(cartArray)); 
    renderCartList(); 
}


//3. Crear un método para eliminar del carrito
export const removeFromCart = (id: number) => {
    const itemIndex = cartArray.findIndex((cartItem) => cartItem.id === id);
    if(cartArray[itemIndex].quantity > 1){
        cartArray[itemIndex].quantity --;
    }else{
        cartArray.splice(itemIndex, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartArray)); 
    renderCartList();
}


//4. Crear un método para obtener el total del carrito
export const getTotal = cartArray.reduce((ac, item) => ac + item.price * item.quantity, 0); 
