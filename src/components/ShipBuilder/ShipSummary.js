import {Grid, Paper, Typography} from "@mui/material";
import KeyValueRow from "../general/KeyValueTable/KeyValueRow";
import {displayKps} from "../../helpers/drives";

const tonsPerCrew = 4;
const tonsPerTank = 100;

const ShipSummary = (props) => {
    let crew = props.hull.crew;
    const componentCrew = parseFloat(props.components.map(component => component.crew));
    if (Number(componentCrew)) {
        crew += componentCrew;
    }

    let wetMass = props.hull.mass_tons;
    const componentMass = parseFloat(props.components.map(component => component.flatMass_tons));
    if (Number(componentMass)) {
        wetMass += componentMass;
    }
    wetMass = wetMass + crew * tonsPerCrew;

    wetMass += props.tanks * tonsPerTank;

    const displayGs = (gs) => {
        let number = gs;

        let label = 'gs';
        if (gs < 1) {
            label = 'milligees';
            number = gs * 1000;
        }

        return number.toFixed(2) + ' ' + label;
    }

    const metersPerSecondToGs = (metersPerSecond) => {
        return metersPerSecond / 9.81 / 1000;
    }

    let cruiseAcceleration = '';
    let combatAcceleration = '';
    const drive = props.components.find(component => component.componentType === 'drive');
    if (drive) {
        const accelerationMetersPerSecond = drive.thrust_N / wetMass;
        const combatAccelerationMetersPerSecond = accelerationMetersPerSecond * drive.thrustCap;

        const cruiseAccelerationGs = Math.min(metersPerSecondToGs(accelerationMetersPerSecond), 2);
        const combatAccelerationGs = Math.min(metersPerSecondToGs(combatAccelerationMetersPerSecond), 4);

        cruiseAcceleration = displayGs(cruiseAccelerationGs);
        combatAcceleration = displayGs(combatAccelerationGs);
    }

    const deltaV = drive === undefined ? 0 : drive.EV_kps * Math.log(wetMass / (wetMass - props.tanks * tonsPerTank));

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper>
                    <Typography variant="h6"
                                style={{
                                    textAlign: 'center',
                                }}>
                        SHIP PERFORMANCE DATA
                    </Typography>
                </Paper>
            </Grid>
            <KeyValueRow label="Wet Mass">
                {wetMass} tons
            </KeyValueRow>
            <KeyValueRow label="Crew">
                {crew}
            </KeyValueRow>
            <KeyValueRow label="Cruise Acceleration">
                {cruiseAcceleration}
            </KeyValueRow>
            <KeyValueRow label="Combat Acceleration">
                {combatAcceleration}
            </KeyValueRow>
            <KeyValueRow label="Delta-V">
                {displayKps(deltaV)}
            </KeyValueRow>
        </Grid>
    );
}

export default ShipSummary;