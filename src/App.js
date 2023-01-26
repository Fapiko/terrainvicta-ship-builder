import './App.css';
import {CssBaseline, Grid, Paper, ThemeProvider, Typography} from '@mui/material';
import HullSelector from './components/HullSelector';
import ShipBuilder from "./components/ShipBuilder/ShipBuilder";
import {theme} from "./themes/terra-invicta";
import {useSelector} from "react-redux";

function App() {
    const ship = useSelector(state => state.ship);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container>
                <Grid item xs={2}/>
                <Grid item xs={9}>
                    <Typography variant={'h3'}>Terra Invicta Ship Builder</Typography>
                    <Paper sx={{p: 2}}>
                        <HullSelector id='hull-select' value={ship.hull.dataName}/>
                        <ShipBuilder hull={ship.hull}/>
                    </Paper>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
