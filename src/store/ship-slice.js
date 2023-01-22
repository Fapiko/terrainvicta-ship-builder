import {createSlice} from "@reduxjs/toolkit";
import {playerHulls} from "../helpers/hulls";

const shipSlice = createSlice({
    name: 'ship',
    initialState: {
        hull: playerHulls.find(hull => hull.dataName === 'Gunship'),
        propellantTanks: 0,
    },
    reducers: {
        highlightComponents(state, action) {
            state.highlightedComponentType = action.payload;
        },
        setHull(state, action) {
            state.hull = action.payload;
        },
        setPropellentTanks(state, action) {
            state.propellantTanks = action.payload;
        }
    }
});

export const shipActions = shipSlice.actions;
export default shipSlice;
