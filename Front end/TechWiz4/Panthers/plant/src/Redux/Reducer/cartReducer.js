import { addToCart } from "./cartAction"

let initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
};

let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case addToCart:
            let { menuid, menuname, image, price, quantity } = action.payload;
            let existingItem = state.cartItems.find((item) => item.menuid === menuid);
            if (!existingItem) {
                state.cartItems.push({
                    menuid,
                    menuname,
                    image,
                    price,
                    quantity,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(price);
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0,
            );
            state.totalQuantity = state.cartItems.reduce(
                (total, item) => total + item.quantity,
                0,
            );
            return state;
        default:
            return state;
    }
};

export default cartReducer;