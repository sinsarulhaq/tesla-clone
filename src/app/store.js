import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../feature/car/carSlice'
export default configureStore({
    reducer:{
        car: carReducer
    }
});

