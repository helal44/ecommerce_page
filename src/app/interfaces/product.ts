export interface Product {
    id:number,
    title:string,
    price:number,
    descdescription:string,
    discountPercentage?:number,
    rating?:number,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images:string[],
    createdAt?:string,
    cart?:boolean
}
