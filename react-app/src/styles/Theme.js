import React from "react";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
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
                backgroundColor: '#008F26',
                color: '#f8f8ff',
            },
            icon: {
                color: '#f8f8ff',
            }
        }
    },
    palette: {
        primary: {
            main: '#1A1A1A',
            contrastText: '#f8f8ff',
        },
        secondary: {
            main: '#008F26',
        },
        other: {
            main: '#FFFFFF'
        }
    },
});

theme = responsiveFontSizes(theme)

const Theme = props => {
    return (
        <ThemeProvider theme={theme}>
            { props.children}
        </ThemeProvider>
    );
};
export default Theme;
