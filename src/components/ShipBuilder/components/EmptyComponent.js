import {Grid} from "@mui/material";
import ShipBuilderIcon from "./ShipBuilderIcon";

export const componentMappings = {
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

const EmptyComponent = (props) => {
    const mapping = componentMappings[props.component];

    return <Grid item xs={1}>
        X: {props.x} Y: {props.y}
        {mapping !== undefined && <ShipBuilderIcon filename={componentMappings[props.component]}
                                                   alt={'empty component'}/>}
    </Grid>
}

export default EmptyComponent;