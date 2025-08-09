import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

// Defina o tipo do item do carrinho
interface CartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    }
  }
});

// Exporte as ações corretamente
export const { addItemCart } = cartSlice.actions;
export default cartSlice.reducer;