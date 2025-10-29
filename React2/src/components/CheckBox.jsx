import { useState } from "react"

export const CheckBox=()=>{
    const [skill,setSkill]=useState([]);
    const handleSkill=(event)=>{
        console.log(event.target.value , event.target.checked);
        if(event.target.checked){
            setSkill([...skill ,event.target.value])
        }
        else{
            setSkill([skill.filter((val)=>val!=event.target.value)])
        }
        }
    return(
        
        <div>
            <h3 style={{color:'brown'}}>Select Your Skills</h3>
            <input  onChange={handleSkill}
            type="checkbox"id='php' value='PHP'/>
            <label htmlFor="php">PHP</label>
          <br/>
          <br/>
             <input onChange={handleSkill}
             type="checkbox" id='java' value='JAVA'/>
             <label htmlFor="java">JAVA</label>
             <br/>
             <br/>
             <input onChange={handleSkill}
              type="checkbox" id="React" value='React'/>
             <label htmlFor="React">React</label>
             <br/>
             <br/>
             <input onChange={handleSkill}
             type="checkbox" id="Node.js" value='Node.js'/>
             <label htmlFor="Node.js">Node.js</label>
             
            <h4 style={{border:'1px solid',width:'40vh'}}>Your skill:- {skill.toString()}</h4>
        </div>
    )
}

