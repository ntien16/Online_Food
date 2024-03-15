import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import filterReducer from "./slices/sortFilterSearch";
import MenuFoodReducer from "./FoodRedux/Reducer/FoodReducer"
import fetchListMenuFoodRedux from "./slices/fetchListMenuFoodSlice"
import commentSlice from "./slices/commentSlice";
let store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterReducer,
        editItem: MenuFoodReducer,
        fetchListMenuFood: fetchListMenuFoodRedux,
        comment:commentSlice
    },
})

export default store;