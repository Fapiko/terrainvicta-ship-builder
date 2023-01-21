import {configureStore} from "@reduxjs/toolkit";
import shipSlice from "./ship-slice";
import dndSlice from "./dnd-slice";

const store = configureStore({
    reducer: {
        dnd: dndSlice.reducer, ship: shipSlice.reducer,
    }
});

export default store;