import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from './components/Todos/StudentSlice';
export const store=configureStore({
    reducer:{
        student:StudentSlice
    }
})