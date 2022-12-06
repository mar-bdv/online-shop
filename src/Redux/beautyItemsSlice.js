import { createSlice } from "@reduxjs/toolkit";
import { dataBeauty } from "../Components/Catalog/dataBeauty";

export const beautyItemsSlice = createSlice({
    name: 'beautyItems',
    initialState: {
        selectedCategory: `всё (${dataBeauty.length})`
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