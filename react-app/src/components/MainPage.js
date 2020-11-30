import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ProtectedRoute from './auth/ProtectedRoute';
import { Box } from '@material-ui/core';
import Sidebar from './Sidebar';
import TagPanel from './TagPanel';
import NoteInfoPanel from './NoteInfoPanel';
import EditorPanel from './EditorPanel';
import NotebookPanel from './NotebookPanel'
import useStyles from './styles/MainPageStyles';
import { toggleTagPanel } from '../store/actions/ui';


export default function MainPage() {
  const classes = useStyles();
  const checked = useSelector(state => state.ui.display_tag_panel);
  const dispatch = useDispatch();

  return (
    <Box className={classes.mainpageContainer}>
      <Sidebar />
      <main className={classes.main}>
        <TagPanel checked={checked} />
        <Route path="/notes">
          {/* Eventually Protected */}
          <Box className={classes.noteviewcontainer}>
            <NoteInfoPanel />
            <EditorPanel />
          </Box>
        </Route>
        <Route path="/notebooks">  {/* Eventually Protected */}
          <NotebookPanel />
        </Route>
      </main>
    </Box>
  );
}
