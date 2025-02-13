import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Holds cart products
    totalPrice: 0, // Track total cart price
  },
  reducers: {
    add: (state, action) => {
      const { productId, quantity, product } = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity += quantity; // Agar product exist kare, to quantity badhao
      } else {
        state.items.push({
          id: productId,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity,
        });
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.id === productId);

      if (item) {
        item.quantity = quantity;
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
