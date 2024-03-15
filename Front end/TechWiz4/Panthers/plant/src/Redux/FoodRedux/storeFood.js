import { createStore,combineReducers } from 'redux';
import filterReducer from './filterActions';
import cartSlice from '../slices/cartSlice';
import fetchListMenuFoodSlice from '../slices/fetchListMenuFoodSlice';

const rootReducer = combineReducers({
    filter: filterReducer,
    cart: cartSlice,
    menuList: fetchListMenuFoodSlice 
});

const store = createStore(rootReducer);

export default store;