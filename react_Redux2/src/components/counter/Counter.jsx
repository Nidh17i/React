import { useDispatch } from 'react-redux'
import { Increment,Decrement } from "./counterSlice";
export const Counter=()=>{
    const dispatch=useDispatch();
    return(
        <>

        <button onClick={()=>dispatch(Increment())}>Inc</button>
        <button onClick={()=> dispatch(Decrement())}>Dec</button>
        </>
    )
}