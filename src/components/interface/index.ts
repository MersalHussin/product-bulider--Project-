import type { TProductsName } from "../types";

export  interface IProudct{
    id:string;
    title:string;
    description:string;
    imageURL:string;
    price:string;
    colors:string[];
    category:{
        name:string;
        imageURL:string;
    }
}

export interface IFormInput{
    id:number;
    label:string;
    name:TProductsName
    type:string;
    placeholder:string;
}


export interface ICatogory{
    id:string;
    name: string;
    imageURL:string;
}