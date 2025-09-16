export  interface IProudct{
    id:number;
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

export const colors: string[] = [
    "#e45689",
    "#000000",
    "#e45689",
    "#ff00ff",
    "#e45689",
    
    

]