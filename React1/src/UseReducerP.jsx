import { useReducer } from "react"

const reducer=(state,action)=>{
    console.log(state,action)
    
    switch(action.type){
        case 'incCount':{
            return state + 1;
        }
        case 'decCount':{
            return state -1;
        }
    }
}

 export const CounterP=()=>{
  const  ivalue=0;
    const [state,dispatch]=useReducer(reducer,ivalue);
   

    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'incCount'})}>Inc</button>
        <button onClick={()=>dispatch({type:'decCount'})}>Dec</button>
        </>
    )
}
