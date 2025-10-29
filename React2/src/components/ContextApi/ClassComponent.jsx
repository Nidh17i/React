import { useContext } from "react"
import { Student } from "./Student"
import { SubjectContext } from "./ContextData"

export const ClassComponent=()=>{
 
    return(
        <div style={{backgroundColor:'skyblue',padding:10}}>
     <h1>Class Component</h1>
     
     <Student/>
 
</div>
 

    )

 }
