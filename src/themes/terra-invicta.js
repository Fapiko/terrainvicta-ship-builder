import {createTheme} from "@mui/material";

const themeOptions = {
    palette: {
        mode: 'dark',
        type: 'dark',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: '#1b282e',
            default: '#0f1317',
        },
        text: {
            primary: '#b8d7d9',
            secondary: '#b8d7d9',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
        ],
        fontSize: 11,
    }
};

export const theme = createTheme(themeOptions);