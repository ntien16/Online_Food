import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteFoodbyID, getListMenuFood, updateFoodByID,AddFoodNewAPI,getFoodbyID } from "../../components/Container/API/MenuFoodAPI";


export const getListMenuFoodThunk = createAsyncThunk("getListMenuFood", async ()=>{
    const response = await getListMenuFood()
    return response
})

export const addFoodThunk = createAsyncThunk("addFood", async (foodItem, thunkAPI)=>{
    const response = await AddFoodNewAPI(foodItem)
    thunkAPI.dispatch(getListMenuFoodThunk())
    return response
})


export const updateFoodThunk = createAsyncThunk("updateFood", async (foodItem, thunkAPI)=>{
    const response = await updateFoodByID(foodItem)
    thunkAPI.dispatch(getListMenuFoodThunk())
    return response
})

export const deleteFoodThunk = createAsyncThunk("deleteFood", async (id, thunkAPI)=>{
    const response = await deleteFoodbyID(id)
    thunkAPI.dispatch(getListMenuFoodThunk())
    return response
})

export const getFoodByIDThunk = createAsyncThunk("getFoodByID", async (id, thunkAPI)=>{
    const response = await getFoodbyID(id)
    thunkAPI.dispatch(getListMenuFoodThunk())
    return response
})





//dispath(updateFoodThunk(123))

let fetchListMenuFoodSlice = createSlice({
    name: "menuList",
    initialState: {listMenuFood: [],},
    reducers: {
        fetchListMenuFood(state, action) {
            state.listMenuFood = action.payload; 
        }
       // dispatch(fetchListMenuFood(123))
    },
    extraReducers: {
        // xu ly khi goi API thanh cong
        [getListMenuFoodThunk.fulfilled] : (state, action) => {
            state.listMenuFood = action.payload
        },
        // xu ly khi goi API chua tra ve ket qua
        [getListMenuFoodThunk.pending] : () => {
            console.log("dang doi goi API tra ve")
        },
        // xu ly khi goi API that bai
        [getListMenuFoodThunk.rejected] : () => {
            alert("that bai")
        },
        [deleteFoodThunk.fulfilled] : () => {
            alert("xoa food thanh cong")
        },
    }
})

export let listMenuAction = fetchListMenuFoodSlice.actions;
export default fetchListMenuFoodSlice.reducer;