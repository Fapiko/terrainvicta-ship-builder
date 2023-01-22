import {Grid, Paper, Typography} from "@mui/material";
import {displayKps, thrustDisplay} from "../../helpers/drives";
import KeyValueRow from "../general/KeyValueTable/KeyValueRow";
import {getDriveLoc} from "../../helpers/localizations";
import PropellantMaterials from "./PropellantMaterials";

const DriveComponentSummary = (props) => {
    const drive = props.drive;

    const requiredPower = drive.thrust_N * drive.EV_kps / 2000000;
    const displayRequiredPower = (powerInGigawatts) => {
        if (powerInGigawatts > 1000) {
            return `${Math.round(powerInGigawatts / 1000)} Terrawatts`;
        } else if (powerInGigawatts < 1) {
            return `${Math.round(powerInGigawatts * 1000)} Megawatts`;
        } else {
            return `${Math.round(powerInGigawatts)} Gigawatts`;
        }
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Paper>
                        <Typography variant="h6"
                                    style={{
                                        textAlign: 'center',
                                        textTransform: 'uppercase'
                                    }}>{drive.friendlyName}</Typography>
                    </Paper>
                </Grid>
                <KeyValueRow label="Required Power">
                    {displayRequiredPower(requiredPower)}
                </KeyValueRow>
                <KeyValueRow label={'Thrust'}>
                    {thrustDisplay(drive.thrust_N)}
                </KeyValueRow>
                <KeyValueRow label="Exhaust Velocity">
                    {displayKps(drive.EV_kps)}
                </KeyValueRow>
                <KeyValueRow label="Power Use Efficiency">
                    {drive.efficiency * 100}%
                </KeyValueRow>
                <KeyValueRow label="Propellant">
                    {getDriveLoc(drive.propellant)}
                </KeyValueRow>
                <KeyValueRow label="Propellant Materials Per Tank">
                    <PropellantMaterials propellant={drive.perTankPropellantMaterials}/>
                </KeyValueRow>
            </Grid>
        </>
    )
}

export default DriveComponentSummary;