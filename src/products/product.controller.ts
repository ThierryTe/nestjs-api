import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductCroller {
    constructor(private readonly productService: ProductsService){}
    
    //Fonction de création d'un produit
    @Post()
    addProduct(
        @Body('title')prodTitle: string,
        @Body('description')prodDescription: string,
        @Body('price')prodPrice: number
    ){
     const generateId = this.productService.createProduct(
         prodTitle,
          prodDescription,
          prodPrice);
     return {id: generateId};
}
//Fonction pour lister tous les produits
@Get()
getAllProducts(){
    return this.productService.getProducts();
}
//fonction lister un produit par son id
@Get(':id')
getProduct(@Param('id')prodId: string){
return this.productService.getProduct(prodId);
}
//Fonction de mise à jour d'un produit
@Patch(':id')
updateProduct(
    @Param('id')prodId: string,
    @Body('title')prodTitle: string,
    @Body('description')prodDescription: string,
    @Body('price')prodPrice: number
){
  this.productService.updateProduct(prodId,prodTitle,prodDescription,prodPrice);
  return null;
}
//Fonction pour la suppression d'un produit
@Delete(':id')
deleteProduct(  @Param('id')prodId: string){
this.productService.deleteProduct(prodId);
return null;
}

}