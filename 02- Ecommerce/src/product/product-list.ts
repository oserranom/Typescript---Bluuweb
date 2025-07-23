import type { Product } from "../interfaces/product.interface";

// 1. Capturar elementos desde la API 

const getProducts = async (): Promise<Product[]> =>{
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json() as Product[]; 
    return products; 
}

// 2. Renderizar la lista de productos en el DOM
// 2.1 Crear la tarjeta card con el template html
