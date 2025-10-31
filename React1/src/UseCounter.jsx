import { useState } from "react"

 export const useCounter=()=>{
const[count,setCount]=useState();

const handleInc=()=>{
    setCount(count+1);
}
const handleDec=()=>{
    setCount(count-1);
}

    return [count,handleDec,handleInc];
 }