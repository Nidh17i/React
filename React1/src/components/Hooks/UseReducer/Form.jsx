import { useReducer } from "react"

// function reducer(state,action){
//     if(action.type=== 'changeName'){
//         return {
//             name:action.nextName,
//             age:state.age
//         }
//     }
//     if(action.type=== 'incAge')
//         return  {
//         name:state.name,
//         age: state.age + 1
//     }


// }

// export const UseReducerForm=()=>{
//     const[state,dispatch]=useReducer(reducer,{name:'Nidhi',age:22});

//     function handleSubmit(){
//         dispatch({
//             type:'incAge'

//         })

//     }

//     return(
//         <div style={{margin:'20px'}}>
//             <h1>{state.name} age is {state.age}</h1>
//             <input placeholder="enter name"
//             value={state.name}
//             onChange={(e)=>
//                 dispatch({
//                   type:'changeName',
//                   nextName:e.target.value})}
//             />
//             <button onClick={handleSubmit} >
//                 Inc Age</button> 
//         </div>
//     )

// }

function reducer(state,action){
    switch(action.type){
        case 'changeName':{
            return{
            age:state.age,
            name:action.changeName
            }
        }
        case 'incAge':{
            return{
                age:state.age + 1,
                name:state.name
            }
        }
    }

}

export const UseReducerForm=()=>{
    const[state,dispatch]=useReducer(reducer,{name:'Nidhi',age:22});
   function handleInput(e){
    dispatch({
        type:'changeName',
        changeName:e.target.value
    })
   }
   function handleSubmit(){
    dispatch(
        {
            type:'incAge'
        }
    )
   }

    return(
        <>
        <h1>Hello, {state.name}.You are {state.age}</h1>
        <input type='text'
        style={{width:'30vh',height:'30px', border:'thick double #32a1ce'}} 
        value={state.name} 
        onChange={handleInput}
        />
        <br/><br/>
        <button
       style={{border:'2px solid black', width:'80px', height:'30px', borderRadius:'10px', margin:'10px'}}
        onClick={handleSubmit}
        >Inc Age</button>
        </>
    )
}