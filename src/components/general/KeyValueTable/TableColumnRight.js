import {Grid} from "@mui/material";

const TableColumnRight = (props) => {
    return (
        <Grid item xs={6} style={{textAlign: 'right', marginTop: 'auto'}}>
            {props.children}
        </Grid>
    )
}

export default TableColumnRight;