import { Box, Slide, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles/TagPanelStyles'

const TagPanel = (props) => {
  const classes = useStyles();

  return (
    <Slide direction="right" in={props.checked} mountOnEnter unmountOnExit>
      <Box className={classes.tagPanel}>
        <Typography>Hello World</Typography>
      </Box>
    </Slide>
  );
}

export default TagPanel;
