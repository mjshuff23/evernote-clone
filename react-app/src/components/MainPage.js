import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
// import ProtectedRoute from './auth/ProtectedRoute';
import { Box, Grid, FormControlLabel, Switch } from '@material-ui/core';
import Sidebar from './Sidebar';
import TagPanel from './TagPanel';
import NoteInfoPanel from './NoteInfoPanel';
import EditorPanel from './EditorPanel';
import NotebookPanel from './NotebookPanel'
import useStyles from './styles/MainPageStyles';


export default function MainPage() {
  const userId = window.localStorage.getItem('userId');
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Box className={classes.mainpageContainer}>
      <Sidebar />
      <main className={classes.main}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        /> {/* TODO: replace this with Tag button in Sidebar */}
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