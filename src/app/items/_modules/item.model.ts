import { Category } from "./category.model"

export interface ItemModel {
    id:number,
    title:string ,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category: Category,
    thumbnail:string
    images:string 
}
