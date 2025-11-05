import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement,Reset } from "./CounterSlice";

export const Counter=()=>{

    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();


    return(
        <>
        <h1>Counter App</h1>
      <h1>{count}</h1>
        <button onClick={()=>dispatch(Increment())}>INC</button>
         <button onClick={()=>dispatch(Decrement())}>Dec</button>
          <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}