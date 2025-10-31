import { useCounter } from "./UseCounter"

export const CounterC=()=>{
    const{count,handleInc,handleDec}=useCounter();
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        </>
    )
}