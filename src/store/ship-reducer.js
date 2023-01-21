import {playerHulls} from "../helpers/hulls";

export const initialShipState = {
    hull: playerHulls.find(hull => hull.dataName === 'Gunship'),
}

function shipReducer(state = initialShipState, action) {
    console.log(action);

    switch (action.type) {
        case 'setHull': {
            return {
                ...state,
                hull: action.hull,
            };
        }
        default:
            console.log('Unknown action type: ' + action.type);
            return state;
    }
}

export default shipReducer;