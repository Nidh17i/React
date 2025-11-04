import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './components/ums/UmsSlice'
export const store=configureStore({
    reducer:{
        UmsReducer:UserReducer
    }

})