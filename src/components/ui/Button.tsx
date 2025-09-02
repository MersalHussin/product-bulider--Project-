
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
children?:React.ReactNode;
className?:string;
width?: "w-full" | "w-fit" | "w-auto";

}


const Button = ({children ,className, width="w-fit", ...rest }: IProps ) => {
    return (
        <button className={`${className} ${width} text-white px-3 py-3 rounded-md mt-3 hover:bg-blue-700 transition-all  cursor-pointer`} {...rest}>
            
            {children}
        </button>
    );
}

export default Button;