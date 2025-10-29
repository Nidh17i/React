import { useState } from "react"

export const CheckGender=()=>{
    const[gender,setGender]=useState('');
    const handleGender=(event)=>{
        setGender(event.target.value)
    }
    return(
        <>
    <h3 style={{color:'brown'}}>Handle Radio and DropDown</h3>
    <h4>Selected Gender : {gender}</h4>

    <input  onChange={handleGender}type="radio" id='M' name="check" value='Male'/>
    <label htmlFor="M">Male</label>

    <input   onChange={handleGender} type="radio" id='F' name="check" value='Female'/>
    <label htmlFor="F">Female</label>
    <br/>

    
    
    </>
    )
}