import { configureStore } from "@reduxjs/toolkit";

import {counterReducer} from './components/counter/counterSlice'

export const data=configureStore({
    reducer:{
        counter:counterReducer,
    }
})


//  import { configureStore } from '@reduxjs/toolkit';
//     import counterReducer from './components/counterSlice';


// export const store=configureStore({
//     reducer:{
//         counter:counterReducer,
//     }
// })