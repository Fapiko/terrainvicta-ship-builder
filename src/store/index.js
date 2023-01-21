import {configureStore} from "@reduxjs/toolkit";
import shipSlice from "./ship-slice";

const store = configureStore({
    reducer: {
        ship: shipSlice.reducer,
    }
});

export default store;