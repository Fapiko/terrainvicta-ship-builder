import {Grid} from "@mui/material";

const TableColumnLeft = (props) => {
    return (
        <Grid item xs={6}>
            {props.children}
        </Grid>
    )
}

export default TableColumnLeft;