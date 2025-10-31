import { useState } from "react"


export const useCounter=()=>{
    const[count,setCount]=useState(0);

    const handleInc=()=>{
        setCount(count+1);
    }
    const handleDec=()=>{
        setCount(count-1);
    }
    return[count,handleInc,handleDec];
}




