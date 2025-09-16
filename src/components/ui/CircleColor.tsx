interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
color: string
}


const CircleColor = ({color ,...rest}: IProps ) => {
    return (
    <span className={`block w-5 h-5 rounded-2xl cursor-pointer`} {...rest} style={{backgroundColor:color}}></span>

    );
}

export default CircleColor;