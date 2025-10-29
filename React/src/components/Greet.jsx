import { useState } from "react";

 const g=(props)=>{
    return <h1>Hello {props.name}                                              </h1>

}

// Typewriter Effect**
// * Create a `<p>` element.
// * Use `setInterval` to type out the text 
// **"Welcome to DOM Practice!"** one letter at a time.

export const TypeEfferct =()=>{
    const[text,setText]=useState('');
    let str='Welcome to Dom';

    function AddText(){
        
        let i=0
        setText('');
        const interval=setInterval(()=>{
            setText(prev=>prev+str.charAt(i));
            i++;
            if(i==str.length-1){
                clearInterval(interval);
            }

        },500)
    }
    return(
        <div style={{width:'50px',height:'20px'}}>
          
            <p>{text}</p>
            <button onClick={AddText}>Start</button>

        </div>
    )

}
 


export default g;