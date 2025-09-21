// ** productObj === errorsObj (Title - Description - Image - Price - Colors)

export function productValidation(product:{title:string; colors:string[]; descraption:string, imageURL:string, price:string}){
    // **Returns an object
    const errors:{title:string; description:string; imageURL:string; price:string; colors:string} = {
        title: "",
        description:"",
        imageURL:"",
        price:"",
        colors:"",
    }

    const validUrl = /\b(?:https?|ftps?|ftp):\/\/[^\s]+?\.(?:jpg|jpeg|png|gif|webp)\b/i.test(product.imageURL);

    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
        errors.title = "Product title must be between 10 and 80 characters"
    }

    if(!product.descraption.trim() || product.descraption.length < 10 || product.descraption.length > 900){
        errors.description = "Product description must be between 10 and 900 characters"
    }

    if(!product.imageURL.trim() || !validUrl){
        errors.imageURL = "Valid image URL is required"
    }

    if(!product.price || isNaN(Number(product.price))){
        errors.price = "Valid price is required"
    }
    
    if(product.colors.length === 0){
        errors.colors = "Please select at least one color"
    }
    if(!product.colors){
        errors.colors = "Not Colors Selected"
    }

    return errors 
}