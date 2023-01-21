import {Grid, Typography} from "@mui/material";

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

    const displayExhaustVelocity = (exhaustVelocity) => {
        if (exhaustVelocity > 1000) {
            return `${(exhaustVelocity / 1000).toFixed(2)}K kps`;
        } else {
            return `${(exhaustVelocity).toFixed(2)} kps`;
        }
    }

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h6">{drive.friendlyName}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>Required Power:</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>{displayRequiredPower(requiredPower)}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>Thrust:</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>{drive.thrust_N.toLocaleString('en-US')} Newtons</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>Exhaust Velocity:</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>{displayExhaustVelocity(drive.EV_kps)}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>Power Use Efficiency:</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>{drive.efficiency * 100}%</Typography>
            </Grid>
            <Grid item xs={6}>
                Propellant:
            </Grid>
            <Grid item xs={6}>
                {drive.propellant}
            </Grid>
        </>
    )
}

export default DriveComponentSummary;