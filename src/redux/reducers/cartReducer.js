import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var existItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (existItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === existItem.product.id) {
            return Object.assign({}, existItem, {
              quantity: existItem.quantity + 1,
            });
          }
          return cartItem;
        });

        return newState;
      } else {
        // React ile pop push işlemleri yapmıyoruz.
        return [...state, { ...action.payload }];
      }
    default:
      return state;
  }
}
