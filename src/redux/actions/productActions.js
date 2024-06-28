export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const setProductDetails = (product) => ({
  type: SET_PRODUCT_DETAILS,
  payload: product,
});
