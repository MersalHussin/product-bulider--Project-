// ** productObj === errorsObj (Title - Description - Image - Price)

export function productValidation(product:{title:string; descraption:string, imageUrl:string, price:string}){
    // **Returns an object
    const errors:{title:string; description:string; imageUrl:string; price:string;} = {
        title: "",
        description:"",
        imageUrl:"",
        price:"",
    }

        const validUrl = /\b(?:https?|ftps?|ftp):\/\/[^\s]+?\.(?:jpg|jpeg|png|gif|webp)\b/i.test(product.imageUrl);


        if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
        errors.title = "Product title must be betwwen 10 and 80 charachters"
        }

        if(!product.descraption.trim() || product.descraption.length < 10 || product.descraption.length > 80){
        errors.description = "Product descreiption must be betwwen 10 and 900 charachters"
        }

        if(!product.imageUrl.trim() || !validUrl){
            errors.imageUrl="Valid image URL is required"
        }

        if(!product.price){
            errors.price = "Valid price is required"
        }

    return errors 
}