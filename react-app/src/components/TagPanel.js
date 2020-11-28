import { Box, Divider, Slide, Typography } from '@material-ui/core';
import React, { useState, useDispatch } from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles/TagPanelStyles'
import { toggleTagPanel } from '../store/actions/ui';

const TagPanel = (props) => {
  const classes = useStyles();
  // const tags = useSelector(state => state.tags.dict);
  const dispatch = useDispatch();

  //========= FOR TESTING ===========================
  const tags = {
    "dict": {
      "1": {
        "id": 1,
        "note_ids": [ 1 ],
        "title": "test",
        "user_id": 1
      },
      "2": {
        "id": 2,
        "note_ids": [ 2 ],
        "title": "class",
        "user_id": 1
      },
      "3": {
        "id": 3,
        "note_ids": [ 3 ],
        "title": "fix",
        "user_id": 1
      },
      "4": {
        "id": 4,
        "note_ids": [ 4, 5 ],
        "title": "javascript",
        "user_id": 1
      },
      "5": {
        "id": 5,
        "note_ids": [ 6, 7 ],
        "title": "c++",
        "user_id": 1
      },
      "6": {
        "id": 6,
        "note_ids": [ 8, 9 ],
        "title": "java",
        "user_id": 1
      },
      "7": {
        "id": 7,
        "note_ids": [ 10 ],
        "title": "to do",
        "user_id": 1
      },
      "8": {
        "id": 8,
        "note_ids": [ 11 ],
        "title": "team",
        "user_id": 1
      },
      "9": {
        "id": 9,
        "note_ids": [ 12 ],
        "title": "project",
        "user_id": 1
      }
    },
    "ids": [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  };
  //=================================================

  const hideTagPanel = e => {
    dispatch(toggleTagPanel);
  }

  return (
    <Slide direction="right" in={props.checked} mountOnEnter unmountOnExit onBlur={hideTagPanel}>
      <Box className={classes.tagPanel}>
        <Typography>Tags</Typography>
        <Divider />
      </Box>
    </Slide>
  );
}

export default TagPanel;
