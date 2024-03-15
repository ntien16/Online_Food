import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0, // Thay đổi totalQuality thành totalQuantity
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.menuid === newItem.menuid);
      state.totalQuantity++; // 
      if (!existingItem) {
        state.cartItems.push({
          menuid: newItem.menuid,
          menuname: newItem.menuname,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0 // Thêm tham số khởi tạo total với giá trị 0
      );
      console.log(state.totalQuantity); // Sửa state.quantity thành state.totalQuantity
      console.log(state.cartItems);
      console.log(newItem);
    },
    // Trong reducer cartSlice
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.menuid === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.menuid !== id);
        state.totalQuantity -= existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
