import { useEffect, useState } from "react"

export const Counter=()=>{
    const[count,setCount]=useState(0);
    const[data,setData]=useState(0);
   
   useEffect(()=>{
   callOnce();
    },[]) // call Only Once

   useEffect(()=>{
   showCount();
    },[count])

    function callOnce(){
        console.log('callOnce function called');
    }
    function showCount(){
       console.log(count);
    }
 
 
    return(
        <>
      <h1>UseEffect Hook</h1>
      <button onClick={()=>setCount(count+1)}>Click Counter {count}</button>
      <br/>
      <button onClick={()=>setData(data+1)}>Click Data{data}</button>
      <br/>
   
    </>
    )
}
