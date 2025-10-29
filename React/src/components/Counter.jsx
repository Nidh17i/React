
import React, { useState } from 'react';
const Counter=()=>{
  const [count,updateC]=useState(0);

  
  return (
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>updateC(count+1)}>Inc</button>
    <button onClick={()=>updateC(count-1)}>Dec</button>
    </>
  )

}
 export const ClickButton=()=>{
      function Alert(){
        alert('Button was clicked');
      };
      return(
        <>
        <button onClick={Alert}>Click Me</button>
        </>

      )}
export default Counter;