import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles/NotebookPanelStyles';


export default function NotebookPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.notebookpanel}>

    </Box>
  );
}