import { GET_PRODUCT_LIST } from "../actions/Types";

const INITIAL_STATE = {
  listProduct: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log("ACTIONSSSS", action);

  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return {
        ...state,
        listProduct: action.products,
      };
    }
    default:
      return state;
  }
};
