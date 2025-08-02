import type { CartItem } from "../interfaces/cartItem.inteface";

//1. Definir variable carrito CartItem[]
const cartArray: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]"); 


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
}


//3. Crear un método para eliminar del carrito


//4. Crear un método para obtener el total del carrito


//5. Crear un método para vaciar carrito