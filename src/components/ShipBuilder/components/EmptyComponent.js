import {Grid} from "@mui/material";
import ShipBuilderIcon from "./ShipBuilderIcon";

export const emptyComponentMappings = {
    'Drive': 'empty_drive',
    'PowerPlant': 'empty_power_plant',
    'Battery': 'empty_battery',
    'Radiator': 'empty_radiators',
    'TailArmor': 'empty_armor',
    'LateralArmor': 'empty_armor',
    'NoseArmor': 'empty_armor',
    'NoseHardPoint': 'empty_nose_hard_point',
    'HullHardPoint': 'empty_hull_hard_point',
    'Utility': 'empty_utility',
}

export const selectComponentMappings = {
    'Drive': 'select_drive',
    'PowerPlant': 'select_power_plant',
    'Battery': 'select_battery',
    'Radiator': 'select_radiators',
    'TailArmor': 'select_armor',
    'LateralArmor': 'select_armor',
    'NoseArmor': 'select_armor',
    'NoseHardPoint': 'select_nose_hard_point',
    'HullHardPoint': 'select_hull_hard_point',
    'Utility': 'select_utility',
}

const EmptyComponent = (props) => {
    const mapping = emptyComponentMappings[props.component];

    return <Grid item xs={1}>
        X: {props.x} Y: {props.y}
        {mapping !== undefined &&
            <ShipBuilderIcon filename={emptyComponentMappings[props.component]}
                             alt={'empty component'}/>}
    </Grid>
}

export default EmptyComponent;