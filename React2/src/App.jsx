
import { useState } from "react"
import { CheckBox } from "./components/CheckBox"
import { College } from "./components/ContextApi/College"
import { SubjectContext } from "./components/ContextApi/ContextData"

import { DroupDown } from "./components/DroupDown"
import { LiftingStateUp } from "./components/LiftingStateUp"
import { Parent } from "./components/Parent"
import { PParent } from "./components/PropDrilling"

import { CheckGender } from "./components/Radio"
import { Student } from "./components/ContextApi/Student"


function App() {
  const[subject,setSubject]=useState('');

  
  return (
    <>
     {/* <CheckBox/>
     <CheckGender/>
     <DroupDown/>
     <LiftingStateUp/> 
      <Parent/> 
    
  <PParent/> */}
  <div style={{backgroundColor:'yellow', padding:10}}>

    <SubjectContext.Provider value={subject}>

      <select  Value={subject}onChange={(event)=>setSubject(event.target.value)}>
        <option value=""> Select Subject</option>
         <option value="Maths"> Maths</option>
          <option value="English"> English</option>
           <option value="Hindi"> Hindi</option>
            <option value="History"> History</option>
      </select>
      <h1>Context API</h1>
      <button onClick={()=>setSubject('')}>Clear Subject</button>
      <College/>

    </SubjectContext.Provider>
  
</div>
 

 
    </>
  )
}

export default App
