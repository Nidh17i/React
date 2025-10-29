import { useState } from "react"


export const DroupDown=()=>{
    const[city,setCity]=useState('Delhi');
    
    return(
        <>
        <h4>Select City :{city}</h4>
        <select  onChange={(event)=>setCity(event.target.value)}defaultValue={""}> city
            <option value='Delhi'>Delhi</option>
            <option value='Mumbai'>Mumbai</option>
            <option value='Noida'>Noida</option>
            <option value='Indore'>Indore</option>
            <option value='Bhopal'>Bhopal</option>
        </select>
         <br/>
         <br/>
       </>
    )
}