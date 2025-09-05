export  interface IProudct{
    id:number;
    title:string;
    description:string;
    imageUrl:string;
    price:number;
    colors:string[];
    category:{
        name:string;
        imageUrl:string;
    }
}

export interface IFormInput{
    id:number;
    label:string;
    name:string;
    type:string;
    placeholder:string;
}