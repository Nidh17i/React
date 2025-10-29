import { useState } from "react"

export const useCounter=()=>{
    const[count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }

  
   
     return [count,Increment,Decrement]
    
    
}