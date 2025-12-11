import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userdata:[]
        
    
    
}


 const FormSlice=createSlice({
    name:'userData',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log('adduser',action.payload)
           
            state.userdata.push(action.payload)
             
        },
        adddelete:(state,action)=>{
            console.log('delter',action.payload);
        const users=    state.userdata.find((x)=>x.name != action.payload);
        state.userdata.push(users);

        }
    }
     })
   export const {addUser,adddelete}=FormSlice.actions;
   export default FormSlice.reducer;
