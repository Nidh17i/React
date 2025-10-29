
import { useReducer } from "react"


 function reducer(state,action){
    console.log(state,action)
    if(action.type ==='inc'){
        return state + 1;
    }
    if(action.type === 'dec'){
        return state - 1;
    }

 }

export const UseReducerCounter=()=>{
    const[state,dispatch]=useReducer(reducer,0);

  


   
    return(
    <div style={{margin:'20px'}}>
    <h1>count:{state}</h1>
    <button  style={{border:'2px solid black', width:'80px', height:'30px', borderRadius:'10px', margin:'10px'}}
    onClick={()=>dispatch({type:'inc'})}>Inc</button>
    <br/>
      <button style={{border:'2px solid black', width:'80px', height:'30px', borderRadius:'10px', margin:'10px'}}
      onClick={()=>dispatch({type:'dec'})}>Dec</button>
    </div>
    )


}