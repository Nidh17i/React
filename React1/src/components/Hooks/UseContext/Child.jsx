import { useContext } from "react"
import { MyContext } from "./index"

export const ContextChild=()=>{
    const data=useContext(MyContext)
    return(
        <>
        <h1>{data}</h1>
        </>
    )
}