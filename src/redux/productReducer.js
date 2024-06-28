import { ADD_PRODUCT, SET_PRODUCT_DETAILS } from './actions/productActions';

const initialState = {
  products: [],
  productDetails: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
