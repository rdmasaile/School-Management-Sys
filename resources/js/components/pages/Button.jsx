const Button = ({value,onClick,type,className}) => {
    return ( 
        <button type={type} className={className} onClick={()=>onClick(value)}>{value}</button>
     );
}
 
export default Button;