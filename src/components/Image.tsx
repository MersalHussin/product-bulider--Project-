interface IProps{
imageURL:string;
altText:string;
className?:string;
}


const Image = ({imageURL,altText,className}: IProps ) => {
    return (
        <img src={imageURL} className={className}  alt={altText}></img>
    );
}

export default Image;