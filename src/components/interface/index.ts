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

export const colors: string[] = [
    "#e45689",
    "#000000",
    "#ff00ff",
    "#ff4d6d",
"#1a1a1a",
"#ff1493",
"#ff9900",
"#33ffcc",
"#6600ff",
"#ff3333",
"#00ff66"

    

]