// remove side effect from outside Components{props}
import { useState } from "react"
import { Method } from "./C";

 export const Inc=()=>{
    const[count,setCount]=useState(0);

    return(
        <>
        <button onClick={()=>setCount(count+1)}>Click Inc{count}</button>
        <Method count={count}/>
        </>
    )
}