import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  amount: number;
}

interface CartStateProps {
  cart: CartItemProps[];
}

const initialState: CartStateProps = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<CartItemProps>) => {
      const indexItem = state.cart.findIndex(newProduct => newProduct.id === action.payload.id);

      if(indexItem >= 0) {
        // Se o prato já está no carrinho, adiciona +1
        state.cart[indexItem].amount += 1;
      } else {
        // Adiciona item ao carrinho, caso ainda não estiver
        state.cart.push({...action.payload, amount: 1})
      }
    },

    removeItemCart: (state, action: PayloadAction<CartItemProps>) => {
      const indexItem = state.cart.findIndex(newProduct => newProduct.id === action.payload.id);
      state.cart[indexItem].amount -= 1;
    }
  }
});

export const { addItemCart, removeItemCart } = cartSlice.actions;
export default cartSlice.reducer;