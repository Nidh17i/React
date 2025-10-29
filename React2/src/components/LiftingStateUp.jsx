import { useState } from "react"

export const LiftingStateUp=()=>{
    const[text,setText]=useState('');
    return(
    <>
    <Form text={text} setText={setText} />
    <Display text={text}/></>
    )

}

const Form=({text,setText})=>{
  
    return (
       
        <div>
        <input 
        type="text" 
        placeholder="Enter Something"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
       
        </div>
    )
}

const Display=({text})=>{
    return(
        <>
        <h3>You Type :- {text}</h3>
        </>
    )
}