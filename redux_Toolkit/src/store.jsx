 import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from './components/counter/counterSlice';


export const store=configureStore({
    reducer:{
        counter:counterReducer,
    }
})
console.log('counterReducer',counterReducer)
console.log('configurestore',store)
 

