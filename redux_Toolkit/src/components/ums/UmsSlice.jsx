import {createSlice} from '@reduxjs/toolkit'



const UmsSlice=createSlice({
    name:'UmsReducer',
    initialState:[],
    reducers :{
        addUser(state,action){
            localStorage.setItem('user',JSON.stringify(...state,action.payload))
            state.push(action.payload)
        },
        deleteuser(state,action){
            return state.filter((u)=> u.id != action.payload)
        }
    }

})

 export const{addUser,deleteuser}=UmsSlice.actions;
export default UmsSlice.reducer;