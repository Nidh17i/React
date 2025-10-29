import { useState } from "react"

export  const FromValidation=()=>{
const[input,setInput]=useState('');

function CheckInput(e){
    console.log(e.target.value)
    setInput(e.target.value)

}

  return(
    <div style={{paddingTop:'20px'}}>
    <input style={{borderRadius:'80px'}}placeholder="Enter userName"></input>
    <button style={{borderRadius:'100px ',background:'lightblue'}}value={input} onClick={CheckInput}>submit</button>
    </div>
  )
}
export default FromValidation;


