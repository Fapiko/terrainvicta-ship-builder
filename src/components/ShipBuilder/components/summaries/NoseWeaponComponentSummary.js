import {Grid, Paper, Typography} from "@mui/material";
import KeyValueRow from "../../../general/KeyValueTable/KeyValueRow";

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
                <KeyValueRow label="Mass">
                    {weapon.baseWeaponMass_tons} tons
                </KeyValueRow>
            </Grid>
        </>
    )
}

export default NoseWeaponComponentSummary;