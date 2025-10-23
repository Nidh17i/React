
import {Child} from "./child"
import { useState } from "react"


export const Parent=()=>{
    const [message,setMessage]=useState('Hello World');
    function changeMsg(msg){
            setMessage(msg)
        }
    return(
        
        <div>
            <p>{message}</p>
            <Child changeMsg={changeMsg}/>
        </div>
    )
}