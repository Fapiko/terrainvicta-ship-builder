import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {playerHulls} from '../helpers/hulls';
import {useDispatch, useSelector} from "react-redux";
import {shipActions} from "../store/ship-slice";

const HullSelector = (props) => {
    const dispatch = useDispatch();
    const hull = useSelector(state => state.ship.hull);

    console.log(hull);

    const hullsList = playerHulls.map((hull) => {
        return (
            <MenuItem key={hull.dataName} value={hull.dataName}>{hull.friendlyName}</MenuItem>
        );
    });

    const hullChanged = (e) => {
        dispatch(shipActions.setHull(playerHulls.find(hull => hull.dataName === e.target.value)));
    }

    return (
        <FormControl>
            <InputLabel id="hull-select-label">Hull</InputLabel>
            <Select value={hull.dataName} sx={{minWidth: '100px'}} labelId="hull-select-label"
                    label="Hull" onChange={hullChanged}>
                {hullsList}
            </Select>
        </FormControl>
    );
}

export default HullSelector;
