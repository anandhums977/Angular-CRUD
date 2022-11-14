import { IProduct } from "./product.interface";

export interface IProductResponse {
    limit:number;
    skip:number;
    total:number;
    products: IProduct[]
    
}
