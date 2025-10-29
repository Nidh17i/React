import { useState } from "react";

const ChangeColor=()=>{
const [color,setColor]=useState('white');

    function RColor(){
        const arr=['red','green','blue','light','black','purple'];
       let value=Math.floor(Math.random()*arr.length);
       return arr[value];

    }

    return(
        
        <div style={{backgroundColor:color,height:'8vh',width:'20vh',padding:'50px'}}>
        <button onClick={()=>setColor(RColor())}>Change Color</button>
        </div>
    )
}

 

export default ChangeColor;




