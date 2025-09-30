import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Components/Product'

export const store = configureStore({
    reducer: {
       products: productReducer,
    },
})

export default store;
