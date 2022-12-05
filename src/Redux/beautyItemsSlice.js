import { createSlice } from "@reduxjs/toolkit";

export const beautyItemsSlice = createSlice({
    name: 'beautyItems',
    initialState: {
        selectedCategory: 'всё(27)'
    },
    reducers:{
        filterCategory: (state, action) =>{
            state.selectedCategory = action.payload
        }
    }
})
export const { filterCategory } = beautyItemsSlice.actions
export const getSelectedCategory = state => state.beautyItems.selectedCategory;
export default beautyItemsSlice.reducer;