import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './components/counter/CounterSlice';
import todosReducer from './components/todos/TodoSlice'
export const store=configureStore({
    reducer:{
        counter: counterReducer,
        Todos:todosReducer
    }
})