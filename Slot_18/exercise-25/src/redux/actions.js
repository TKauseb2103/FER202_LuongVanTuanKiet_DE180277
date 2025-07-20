export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_TO_CART = 'ADD_TO_CART';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
}); 