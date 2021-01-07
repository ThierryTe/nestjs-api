import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{
private products: Product[] = [];

//service de création d'un produit
createProduct(title: string, description: string, price:number){
      const prodId = Math.random().toString();
      const newProduct = new Product(prodId, title,description,price);
      this.products.push(newProduct);
      return prodId;
}
//Service de récupération de la liste de tous les produits
getProducts(){
      return [...this.products];
}
//service de récupération d'un produit
getProduct(productId: string){
      const product = this.findProduct(productId)[0];
      return {...product};
}
//service de mise à jour d'un produit
updateProduct(productId: string,title: string, description: string, price:number ){
   const [product, index ]= this.findProduct(productId);
   const updateProduct = {...product};
   if(title){
         updateProduct.title=title;
         }
  if(description){
       updateProduct.description=description;
        }
  if(price){
        updateProduct.price=price;
  }
   this.products[index] = updateProduct;

}
//service de suppression d'un produit
deleteProduct(prodId: string){
 const index = this.findProduct(prodId)[1];
this.products.splice(index,1);
}
//service de recherche d'un produit
private findProduct(id: string): [Product, number]{
      const productIndex = this.products.findIndex((prod) =>prod.id === id);
      const product = this.products[productIndex];
      if(!product){
            throw new NotFoundException('Produit non disponible !')
      }
      return [product,productIndex]; 
}
}