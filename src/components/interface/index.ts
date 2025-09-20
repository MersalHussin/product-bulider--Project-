export  interface IProudct{
    id:string;
    title:string;
    description:string;
    imageUrl:string;
    price:string;
    colors:string[];
    category:{
        name:string;
        imageUrl:string;
    }
}

export interface IFormInput{
    id:number;
    label:string;
    name:"title" | "description" | "imageUrl" | "price" ;
    type:string;
    placeholder:string;
}


export interface ICatogory{
    id:string;
    name: string;
    imageURL:string;
}