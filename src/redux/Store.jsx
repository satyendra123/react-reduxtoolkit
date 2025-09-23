import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from './slices/ProductSlices'

const Store = configureStore({
    reducer:{
        ProductSlices
    }
})
export default Store