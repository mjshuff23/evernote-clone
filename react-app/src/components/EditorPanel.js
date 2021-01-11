import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles/EditorPanelStyles';
import Editor from './Editor';
import TagsToolbar from './TagsToolbar';


export default function EditorPanel() {
  const classes = useStyles();
  return (
    <Box className={classes.editorpanel}>
      <Editor />
    </Box>
  );
}
