import type { Product } from "../interfaces/product.interface";

// 1. Capturar elementos desde la API 

const getProducts = async (): Promise<Product[]> =>{
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json() as Product[]; 
    return products; 
}

// 2. Renderizar la lista de productos en el DOM

export const renderProductList = async () =>{
    const products = await getProducts(); 
    const productList = document.querySelector("#product-list") as HTMLDivElement;
    const productTemplate = document.querySelector("#product-template") as HTMLTemplateElement;

    products.forEach((product)=>{
        const clone = createProductCard(product, productTemplate);
        productList.appendChild(clone); 
    });
}


// 2.1 Crear la tarjeta card con el template html
//Sintáxis para templates, básicamente creamos un clon de template para cada iteración de product 

const createProductCard = (product: Product, productTemplate: HTMLTemplateElement) =>{
   
    const { title, id, image, price} = product;

    const clone = productTemplate.content.cloneNode(true) as HTMLDivElement;

    clone.querySelector("img")!.src = image;
    clone.querySelector("h2")!.textContent = title;
    clone.querySelector("p span")!.textContent = `${price} €`;
    clone.querySelector("button")!.addEventListener("click", ()=>{
        console.log(`Product id: ${id}`);
    });

    return clone;
}