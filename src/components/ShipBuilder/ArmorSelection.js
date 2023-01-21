import {Grid} from "@mui/material";
import ShipBuilderIcon from "./components/ShipBuilderIcon";

const ArmorSelection = (props) => {
    return (
        <Grid container>
            <Grid item xs={2}/>
            <Grid item xs={3}>
                <ShipBuilderIcon filename="empty_armor" alt={'empty armor'}/>
            </Grid>
            <Grid item xs={3}>
                <ShipBuilderIcon filename="empty_armor" alt={'empty armor'}/>
            </Grid>
            <Grid item xs={3}>
                <ShipBuilderIcon filename="empty_armor" alt={'empty armor'}/>
            </Grid>
        </Grid>
    );
}

export default ArmorSelection;