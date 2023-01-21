import {createSlice} from "@reduxjs/toolkit";
import {playerHulls} from "../helpers/hulls";

const shipSlice = createSlice({
    name: 'ship',
    initialState: {
        hull: playerHulls.find(hull => hull.dataName === 'Gunship'),
    },
    reducers: {
        highlightComponents(state, action) {
            console.log(action.payload);
            state.highlightedComponentType = action.payload;
        },
        setHull(state, action) {
            state.hull = action.payload;
        }
    }
});

export const shipActions = shipSlice.actions;
export default shipSlice;
