interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: string;
  className?: string;
}

const CircleColor = ({ color, className = "", ...rest }: IProps) => {
  return (
    <span 
      className={`block w-5 h-5 rounded-2xl cursor-pointer ${className}`} 
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default CircleColor;