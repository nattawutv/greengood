import { createStore } from "redux";

const initialState = { checkedoutProducts: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKOUT_PRODUCT":
      if (state.checkedoutProducts.find(p => p.id === action.product.id))
        return state;
      return {
        checkedoutProducts: [...state.checkedoutProducts, action.product]
      };
  }
  return state;
};

export default createStore(reducer);