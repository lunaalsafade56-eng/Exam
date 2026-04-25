import  { type ReactNode } from 'react'

interface BouttonProps{
to?:string;
variant?:"primary"|"secondary";
children:ReactNode;
}

function Button({variant="secondary"}:BouttonProps) {
  return (
    <div className={` text-white p-2 rounded-xl ${variant==="primary"?"bg-amber-950":"bg-blue-300"}`}>Button </div>
  )
}

export default Button