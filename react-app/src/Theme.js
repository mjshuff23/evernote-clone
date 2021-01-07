import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
    fontFamily: [
        'Fira Sans',
        'sans-serif',
    ].join(','),
    typography: {
        fontFamily: [
            'Fira Sans',
            'sans-serif',
        ].join(','),
    },
    overrides: {
        MuiChip: {
            root: {
                backgroundColor: 'green',
                color: 'white',
            },
        }
    },
    palette: {
        primary: {
            main: '#1A1A1A',
            contrastText: '#f8f8ff',
        },
        secondary: {
            main: '#211522',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#D3B1C2',
        },
        contrastThreshold: 3,
    },
});
const Theme = props => {
    return (
        <ThemeProvider theme={ theme }>
            { props.children }
        </ThemeProvider>
    );
};
export default Theme;
