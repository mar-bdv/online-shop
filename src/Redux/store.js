import { configureStore } from "@reduxjs/toolkit";
import beautyItems from './beautyItemsSlice'
import cart from './cartSlice'

export const store = configureStore({
    reducer:{
        beautyItems,
        cart
    }
})