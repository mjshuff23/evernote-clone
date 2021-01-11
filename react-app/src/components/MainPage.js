import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Sidebar from './Sidebar';
import TagPanel from './TagPanel';
import NoteInfoPanel from './NoteInfoPanel';
import EditorPanel from './EditorPanel';
import NotebookPanel from './NotebookPanel';
import useStyles from './styles/MainPageStyles';

export default function MainPage() {
  const classes = useStyles();

  return (
    <Box className={classes.mainpageContainer}>
      <Sidebar />
      <main className={classes.main}>
        <Switch>
          <Route path="/allnotebooks">
            <TagPanel />
            <NotebookPanel />
          </Route>
          <Route path="/notebooks/:current_notebook/notes/:current_note/tags/:current_tag">
            <TagPanel />
            <Box className={classes.noteviewcontainer}>
              <NoteInfoPanel />
              <EditorPanel />
            </Box>
          </Route>
        </Switch>
      </main>
    </Box>
  );
}
