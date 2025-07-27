import type { Product } from "../interfaces/product.interface";

// 1. Capturar elementos desde la API 

const getProducts = async (): Promise<Product[]> =>{
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json() as Product[]; 
    return products; 
}

// 2. Renderizar la lista de productos en el DOM

const renderProductList = async () =>{
    const products = await getProducts(); 
    const productList = document.querySelector("#product-list") as HTMLDivElement;
    const productTemplate = document.querySelector("#product-template") as HTMLTemplateElement;

    products.forEach(({title, id, image, price})=>{
        //Ojo a esta sintáxis para templates
        const product = productTemplate.content.cloneNode(true) as HTMLDivElement;
        product.querySelector("img")!.src = image;
        product.querySelector("h2")!.textContent = title;
        product.querySelector("span")!.textContent = `${price} €`;
        product.querySelector("a")!.href = `product-detail.html?id=${id}`;
        productList.appendChild(product);
    });
}
// 2.1 Crear la tarjeta card con el template html
