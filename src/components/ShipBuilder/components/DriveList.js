import {exhaustVelocityDisplay, playerDrives, thrustDisplay} from "../../../helpers/drives";
import {Box, Grid, Tooltip} from "@mui/material";
import {getRequiredPowerPlantLoc} from "../../../helpers/power-plant";
import KeyValueRow from "../../general/KeyValueTable/KeyValueRow";

const DriveList = (props) => {
    const driveSelectedHandler = (drive) => {
        props.componentSelectionChanged(drive);
    }

    const drives = playerDrives.map(drive => {
        const iconName = drive.normalizedDataName.toLowerCase().replaceAll('-', '_');

        const tooltipGridLeft = (text) => {
            return <Grid item xs={6}>
                {text}:
            </Grid>
        }

        const tooltipGridRight = (text) => {
            return <Grid item xs={6} style={{textAlign: 'right'}}>
                {text}
            </Grid>
        }

        const tooltip = <div>
            <div style={{minWidth: 250}}>{drive.friendlyName}</div>
            <Grid container spacing={1}>
                <KeyValueRow label={'Thrust'}>
                    {thrustDisplay(drive.thrust_N)}
                </KeyValueRow>
                {tooltipGridLeft('Exhaust Velocity')}
                {tooltipGridRight(exhaustVelocityDisplay(drive.EV_kps))}
                {tooltipGridLeft('Required Power Plant')}
                {tooltipGridRight(getRequiredPowerPlantLoc(drive.requiredPowerPlant))}
            </Grid>
        </div>

        return (
            <Tooltip key={drive.dataName} sx={{maxWidth: '500px'}} title={tooltip}>
                <img onClick={driveSelectedHandler.bind(null, drive)}
                     src={`assets/shipbuildericons/ico_${iconName}.png`} alt={drive.name}
                     width={72}/>
            </Tooltip>
        );
    });

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', maxHeight: '200px', overflow: 'auto'}}>
            {drives}
        </Box>
    );
}

export default DriveList;