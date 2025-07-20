import { configureStore } from '@reduxjs/toolkit';
import { productReducer, cartReducer } from '../redux/reducers';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store; 