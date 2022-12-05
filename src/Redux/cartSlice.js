import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: []
    },
    reducers:{
        addItemToCart: (state, action) =>{
            const timeId = new Date().getTime()
            
            state.cartItems.push({
                id: timeId,
                productId: action.payload.productProp.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.productProp.new_price,
                sale: action.payload.productProp.old_price - action.payload.productProp.new_price,
                
            })
        },
        removeItemFromCart: (state, action) =>{
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        },
    }
})

export const getTotalPrice = state =>{
    return state.cart.cartItems.reduce((total, cartItems) =>{
        return cartItems.totalPrice + total
    }, 0)
}
export const getSalePrice = state =>{
    return state.cart.cartItems.reduce((total, cartItems) =>{
        return cartItems.sale + total
    }, 0)
}
export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = slice.actions;
export default slice.reducer


/**
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: []
    },
    reducers:{
        addItemToCart: (state, action) =>{
            state.cartItems.push({
                id: timeId,
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        },
    }
})

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = slice.actions;
export default slice.reducer



 */