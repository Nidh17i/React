
import { configureStore } from '@reduxjs/toolkit';
import {counterReducer} from './components/counter/CounterSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer,

    }
})