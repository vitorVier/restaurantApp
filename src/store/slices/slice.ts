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
  subTotal: number;
  totalCart: number;
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
        state.cart[indexItem].subTotal = state.cart[indexItem].price * state.cart[indexItem].amount;
      } else {
        // Adiciona item ao carrinho, caso ainda não estiver
        state.cart.push({
          ...action.payload, 
          amount: 1,
          subTotal: action.payload.price
        })
      }
    },

    removeItemCart: (state, action: PayloadAction<CartItemProps>) => {
      const indexItem = state.cart.findIndex(newProduct => newProduct.id === action.payload.id);
      state.cart[indexItem].amount -= 1;
      state.cart[indexItem].subTotal = state.cart[indexItem].price * state.cart[indexItem].amount;

      // Remove item do carrinho ao chegar a 0 unidades
      if(state.cart[indexItem].amount <= 0) {
        state.cart.splice(indexItem, 1)
      }
    },
  }
});

export const totalCart = (state: { cart: CartStateProps }) => state.cart.cart.reduce((acc, item) => acc + item.subTotal, 0);

export const { addItemCart, removeItemCart } = cartSlice.actions;
export default cartSlice.reducer;