interface IProps{
imageUrl:string;
altText:string;
className?:string;
}


const Image = ({imageUrl,altText,className}: IProps ) => {
    return (
        <img src={imageUrl} className={className} alt={altText}></img>
    );
}

export default Image;