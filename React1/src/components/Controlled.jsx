import { useState } from "react"


export const ControlledCom=()=>{
    const[message,setMessage]=useState('');
   const handleInput=(event)=>{
   // console.log(event.target.value);
    setMessage(event.target.value);
     
   }
   const handleSubmit=(event)=>{
    event.preventDefault();
    alert("your Message is "+message)
   }
      return(
      <>
      <h3>Controlled component </h3>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInput} value={message}></input>
        <button type="submit">submit</button>
      </form>
      </>
      )
}