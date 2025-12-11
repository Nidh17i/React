import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './features/formSlice'


export const store=configureStore({
    reducer:{
     userData:userReducer

    }
})