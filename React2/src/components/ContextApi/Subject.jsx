import { useContext } from "react"
import { SubjectContext } from "./ContextData"


export const Subject =()=>{
    const s=useContext(SubjectContext)
    return(
        <div style={{backgroundColor:'orange',padding:10}}>
     <h1>subject Component:{s}</h1>

 
</div>
 

    )

 }