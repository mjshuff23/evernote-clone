import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Box } from '@material-ui/core';

import useStyles from '../styles/MainPageStyles';
import Sidebar from './sidebar/Sidebar';
import TagPanel from './tagpanel/TagPanel';
import NoteInfoPanel from './noteinfopanel/NoteInfoPanel';
import EditorPanel from './editorpanel/EditorPanel';
import NotebookPanel from './notebookpanel/NotebookPanel';

export default function MainPage() {
  const classes = useStyles();

  return (
    <Box className={classes.mainpageContainer}>
      <Sidebar />
      <Switch>
        <Route path="/allnotebooks">
          <TagPanel />
          <Box className={classes.viewContainer}>
            <NotebookPanel />
          </Box>
        </Route>
        <Route path="/notebooks/:current_notebook/notes/:current_note/tags/:current_tag">
          <TagPanel />
          <Box className={classes.viewContainer}>
            <NoteInfoPanel />
            <EditorPanel />
          </Box>
        </Route>
      </Switch>
    </Box>
  );
}
