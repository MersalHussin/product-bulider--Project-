interface IProps{
children?:React.ReactNode;
className?:string;

}


const Button = ({children ,className}: IProps ) => {
    return (
        <button className={`${className} text-white px-3 py-3 rounded-md mt-3 hover:bg-blue-700 transition-all flex-1 cursor-pointer`}>
            
            {children}
        </button>
    );
}

export default Button;