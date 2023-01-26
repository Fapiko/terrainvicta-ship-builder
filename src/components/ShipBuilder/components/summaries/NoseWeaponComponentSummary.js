import {Grid, Paper, Typography} from "@mui/material";
import KeyValueRow from "../../../general/KeyValueTable/KeyValueRow";
import {hardpointText} from "../../../../helpers/weapons";

const NoseWeaponComponentSummary = (props) => {
    const weapon = props.weapon;

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Paper>
                        <Typography variant="h6"
                                    style={{
                                        textAlign: 'center',
                                        textTransform: 'uppercase'
                                    }}>{weapon.friendlyName}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    Nose mount, uses {hardpointText(weapon)}.
                </Grid>
                <KeyValueRow label="Mass">
                    {weapon.baseWeaponMass_tons} tons
                </KeyValueRow>
            </Grid>
        </>
    )
}

export default NoseWeaponComponentSummary;