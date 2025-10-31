import { useCounter } from "./useCounter"

export const Counter=()=>{
    const[count,handleInc,handleDec]=useCounter();

    return(
        <>
        <h1> count :{count}</h1>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        </>
    )
}
