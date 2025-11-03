import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement } from "./counterSlice";

export const Counter=()=>{
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();



    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(Increment())}>INC</button>
        <button onClick={()=>dispatch(Decrement())}>DEC</button>
        </>
    )
}