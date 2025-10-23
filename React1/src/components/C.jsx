// remove side effect from outside Components{props}
import { useEffect } from "react";

 export const Method=({count})=>{

    const handleInc=()=>{
        console.log("i am INc Method : " +(count));
    }

  useEffect(()=>{
   handleInc()
    },[count])
   
    return(<>
    <h1>Inc Value :{count} </h1>
    </>)
}

