import type { InputHTMLAttributes } from 'react';
interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    rest ?: React.InputHTMLAttributes<HTMLInputElement>;
}


const Input = ({...rest}: IProps ) => {
    return (
        <input  className='border-2 border-gray-300 rounded-md p-2 focus:outline-blue-500' {...rest}/>
        );
}

export default Input;