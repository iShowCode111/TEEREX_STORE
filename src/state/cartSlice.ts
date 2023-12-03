import { TshirtData } from '@/types/Api'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

type CartItem = {
    product: TshirtData,
    count: number
}

type CartItemState = {
    cart: CartItem[]
}

const initialState: CartItemState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [],
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TshirtData>) => {
            //if that action product has already in cart then if block will work
            const itemIndex = state.cart.findIndex(
              (item) => item.product.id === action.payload.id
            );
            if (itemIndex >= 0) {
              state.cart[itemIndex].count += 1;
            } else {
              state.cart.push({product: action.payload, count: 1});
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
          removeFromCart(state, action) {
            const updatedCart = state.cart.filter((item) => item.product.id !== action.payload.id);
            state.cart = updatedCart;
            localStorage.setItem("cart", JSON.stringify(state.cart));
          },
          removeAll(state, action) {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart));
          },
          reduceProduct(state, action) {
            const itemIndex = state.cart.findIndex(
              (item) => item.product.id === action.payload.id
            );
      
            if (state.cart[itemIndex].count > 1) {
              state.cart[itemIndex].count -= 1;
            } else if (state.cart[itemIndex].count === 1) {
                // TODO: refactor from removeFromCart
                const updatedCart = state.cart.filter((item) => item.product.id !== action.payload.id);
                state.cart = updatedCart;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
          },
          incrementProduct(state, action) {
            const itemIndex = state.cart.findIndex(
              (item) => item.product.id === action.payload.id
            );
            state.cart[itemIndex].count = Math.max(state.cart[itemIndex].count + 1, state.cart[itemIndex].product.quantity)
            localStorage.setItem("cart", JSON.stringify(state.cart))
          },
    }
})