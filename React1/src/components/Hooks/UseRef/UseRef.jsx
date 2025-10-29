import { useRef } from "react"

 export const UseRef=()=>{
    const inputRef=useRef(null);
    const h1Ref=useRef(null);
    const handleClick=()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color='green';
        inputRef.current.value="Thankyou";
    }
    const hanldeToggle=()=>{
        if(inputRef.current.style.display!='none'){
        inputRef.current.style.display='none';
        }else{
            inputRef.current.style.display='inline';
        }
    }

    return(
        <>
        <button onClick={hanldeToggle}>Toggle</button>
        <input  ref={inputRef}type="text"style={{marginTop:'100px' ,marign:'20px'}} placeholder="enter value.."/>
        <button onClick={handleClick}>Submit</button>
         <h1 ref={ h1Ref}> Hello</h1> 
        </>
    )

}