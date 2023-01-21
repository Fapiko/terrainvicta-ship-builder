import {
    Box,
    Card,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@mui/material";
import {useState} from "react";
import {playerDrives} from "../../helpers/drives";
import DriveComponentSummary from "./DriveComponentSummary";

const ShipBuilderMUI = (props) => {
    const [selectedComponent, setSelectedComponent] = useState({});
    const [selectedComponentType, setSelectedComponentType] = useState('Drive');
    const totalMass = 200000000;
    const drivePower = 100000000;

    const accelerationMetersPerSecond = drivePower / totalMass;

    const metersPerSecondToGs = (metersPerSecond) => {
        return metersPerSecond / 9.81;
    }

    const accelerationGs = metersPerSecondToGs(accelerationMetersPerSecond);

    const displayGs = (gs) => {
        let number = gs;

        let label = 'gs';
        if (gs < 1) {
            label = 'milligees';
            number = gs * 1000;
        }

        return number.toFixed(2) + ' ' + label;
    }

    const componentTypeChanged = (e) => {
        setSelectedComponentType(e.target.value);
    }

    const selectedComponentChanged = (component) => {
        setSelectedComponent(component);
    }

    const selectedComponentSummary = (component) => {
        switch (component.componentType) {
            case 'drive':
                return (
                    <DriveComponentSummary drive={component}/>
                )
            default:
                console.log('Unknown component type: ' + component.componentType);
        }
    }

    const cards = playerDrives.map(drive => {
        return <Grid item sx={1}>
            <Card onClick={selectedComponentChanged.bind(null, drive)}
                  sx={{height: '30px', lineHeight: '30px', m: 1}}>
                {drive.normalizedFriendlyName}
            </Card>
        </Grid>
    });

    return (
        <>
            <FormControl>
                <InputLabel id="component-type-select-label">Component Type</InputLabel>
                <Select value={selectedComponentType} sx={{minWidth: '150px'}}
                        labelId="component-type-select-label"
                        label="Component Type" onChange={componentTypeChanged}>
                    <MenuItem value={'noseWeapons'}>Nose Weapons</MenuItem>
                    <MenuItem value={'Drive'}>Drive</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={1} sx={{p: 2}}>
                <Box sx={{display: 'flex', flexWrap: 'wrap', maxHeight: '200px', overflow: 'auto'}}>
                    {cards}
                </Box>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>
                                Wet Mass: {(totalMass / 1000).toLocaleString('en-US')} tons
                            </Typography>
                            <Typography>
                                Cruise Acceleration: {displayGs(accelerationGs)}
                            </Typography>
                            <Typography>
                                Combat Acceleration: {displayGs(accelerationGs * 60)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                {selectedComponentSummary(selectedComponent)}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    Ship build
                </Grid>
            </Grid>
        </>
    )
}

export default ShipBuilderMUI;