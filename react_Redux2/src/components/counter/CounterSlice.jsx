import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        Increment:(state)=>{
            state.value += 1;
        },
        Decrement:(state)=>{
            state.value -= 1;
        }
    }
})

const {Increment,Decrement}=CounterSlice.actions;
export default CounterSlice.reducer;

