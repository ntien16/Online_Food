import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import cartSlice from "./cartReducer";

let rootReducer=combineReducers ({
    filter:filterReducer,
    addItem:cartSlice
});
export default rootReducer;