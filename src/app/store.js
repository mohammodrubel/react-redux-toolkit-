import {configureStore} from '@reduxjs/toolkit'
import counterReducers from './featchers/counter/counterSlice'
export const store  = configureStore({
    reducer:{
        counter:counterReducers
    }
})