import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles/NotebookPanelStyles';
import NbPanelHeadingBar from './NbPanelHeadingBar';
import NbPanelSubHeadingBar from './NbPanelSubHeadingBar';
import NbPanelTable from './NbPanelTable';

export default function NotebookPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.notebookpanel}>
      <NbPanelHeadingBar />
      <NbPanelSubHeadingBar className={classes.nb_panel_sub}/>
      <NbPanelTable className={classes.nb_panel_table}/>
    </Box>
  );
}
