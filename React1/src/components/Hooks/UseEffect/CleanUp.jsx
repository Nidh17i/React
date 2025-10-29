import { useEffect } from "react";
import { useState } from "react"

 export const CleanUp=()=>{
    const[count,setCount]=useState(3566);

    useEffect(()=>{
      const timer= 
     setInterval(()=>{
            setCount((prev)=>prev+1)

        },1000)
        return()=>{
        clearInterval(timer);
        }
        
        

    },[])
    return(
    <div style={{textAlign:'center'}}>
        <h1>My Subcribers on Youtube</h1>
       <h1 style={{color:'blue'}}><b>{count}</b></h1>
        <h1>SubScribers<br/> Realtime Counter</h1>



    </div>)

}