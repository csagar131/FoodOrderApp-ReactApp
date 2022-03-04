import CartContext from "./cart-context";
import React, { useReducer } from "react";

const cartReducer = (state, action) => {
  if (action.type === "add") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.qty
    let isItemPresent = false;
    let itemPresentIndex = -1;

    for (let index = 0; index < state.items.length; index++) {
      if (state.items[index].id === action.item.id) {
        isItemPresent = true;
        itemPresentIndex = index;
        break;
      }
    }

    if (!isItemPresent) {
      action.item["qty"] = action.qty;
      return {
        ...state,
        totalAmount : updatedTotalAmount,
        items: [...state.items, action.item],
      };
    } else {
      state.items[itemPresentIndex].qty += action.qty;
      return {
        ...state,
        totalAmount : updatedTotalAmount,
      };
    }
  }
  if (action.type === "remove") {
  }

  return state;
};

const CartProvider = (props) => {
  const addItemToCart = (item, qty) => {
    cartDispatcher({ type: "add", item: item, qty: qty });
  };

  const removeItemFromCart = (id) => {
    cartDispatcher({ type: "remove", id: id });
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  const [cartState, cartDispatcher] = useReducer(cartReducer, cartContext);

  return (
    <CartContext.Provider value={cartState}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
