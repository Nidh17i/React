// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux";

 
// export const Todo=()=>{
//     const [text,setText]=useState('');

//     const data=useSelector((state)=>state.Todos.value)
//     const dispatch=useDispatch();

//     console.log(data);
    
//     const handleSubmit=()=>{
//         dispatch({type:'addTodo',payload:'text'})
//     }

//     return(
//         <>
//         <input 
//         type="text"
//         placeholder='Enter Task'
//         value={text}
//         onChange={(e)=>setText(e.target.value)}

//         />
//         <button onSubmit={handleSubmit}>Add</button>
//         </>

//     )
// }