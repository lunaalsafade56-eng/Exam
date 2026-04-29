import  { type ReactNode } from 'react'
import { Link } from 'react-router-dom';

interface BouttonProps{
to?:string;
variant?:"primary"|"secondary";
children:ReactNode;
onClick?:()=>void;
}

function Button({variant="secondary",to,children,onClick}:BouttonProps) {
  
    
      if(to){
        return (
          <Link to={to}  className={` text-white p-2 mx-2 mt-2 rounded-xl ${variant==="primary"?"bg-blue-900":"bg-blue-300"}`}>{children}</Link>
        )
      }
return(
  <button onClick={onClick}>{children}</button>
)
  
  
}

export default Button