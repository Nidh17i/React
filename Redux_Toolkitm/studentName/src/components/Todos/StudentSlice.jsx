import { createSlice } from "@reduxjs/toolkit";


const StudentSlice=createSlice({
  
        name:'Student',
        initialState:[],
         reducers:{
            addStudent:(state,action)=>{
                
                state.push(action.payload)

            }
            
        }
    }
)
 export const {addStudent}=StudentSlice.actions;
export default StudentSlice.reducer;