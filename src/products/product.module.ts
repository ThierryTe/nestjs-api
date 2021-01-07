import {Module} from "@nestjs/common";
import { ProductCroller } from "./product.controller";
import { ProductsService } from "./products.service";

@Module({
    controllers: [ProductCroller],
    providers: [ProductsService]
})
export class ProductModule{}