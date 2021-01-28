import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams, useHistory } from 'react-router-dom';

import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Divider, IconButton, List, ListItem, ListItemText, ListSubheader, Slide,
  TextField, Typography
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from '../../styles/tagpanel/TagPanelStyles'
import { addTagToNoteThunk } from '../../store/actions/notes';
import { toggleTagPanel } from '../../store/actions/ui';
import { createTagThunk, deleteTagThunk, disassociateTagThunk } from '../../store/actions/tags';
import { deleteTagFromNotes } from '../../store/actions/notes';

const TagPanel = () => {
  let { current_notebook, current_note, current_tag } = useParams();
  const classes = useStyles();
  const notes = useSelector(state => state.notes);
  const tags = useSelector(state => state.tags);
  const ui = useSelector(state => state.ui);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [createDialog, setCreateDialog] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  let history = useHistory();

  const sections = () => {
    if (tags.ids.length === 0) return;
    let sectionMapping = {};
    ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].forEach(section => {
      let filteredIds = tags.ids.filter(tagid => {
        if (section === '#') {
          return tags.dict[tagid].title.match(/^[^a-z]/i);
        }
        return tags.dict[tagid].title.match(new RegExp(`^[${section}]`, 'i'));
      });
      if (filteredIds.length > 0) {
        sectionMapping[section] = filteredIds;
      }
    });
    return sectionMapping;
  };

  useEffect(() => { }, [tags, notes]);

  const openDialog = e => {
    e.preventDefault();
    setCreateDialog(true);
  }

  const closeDialog = e => {
    e.preventDefault();
    setCreateDialog(false);
  }

  const submitCreatedTag = e => {
    e.preventDefault();
    setCreateDialog(false);
    dispatch(createTagThunk(user.id, newTagName));
  }

  const updateNewTagName = e => {
    setNewTagName(e.target.value);
  }

  const addTagToNote = tagId => {
    dispatch(addTagToNoteThunk(current_note, tagId));
  }

  const removeTag = tagId => {
    // if (Number(current_tag) === tagId) {
    //   console.log('Pushed to history');
    //   history.push(`/notebooks/${current_notebook}/notes/${current_note}/tags/none`);
    // }
    // console.log('Current Tag', current_tag);
    // console.log('Current Tag', tagId);
    dispatch(disassociateTagThunk(current_note, tagId));
  }

  const deleteTag = tagId => {
    let noteIds = tags.dict[tagId].note_ids;
    if (Number(current_tag) === tagId) {
      history.push(`/notebooks/${current_notebook}/notes/${current_note}/tags/none`);
    }
    dispatch(deleteTagFromNotes(tagId, noteIds));
    dispatch(deleteTagThunk(user.id, tagId));
  }

  if (Object.keys(ui).length === 0 || tags.ids.length === 0) return null;

  return (
    <Slide direction="right" in={ui.display_tag_panel} mountOnEnter unmountOnExit>
      <Box className={classes.tagPanel}>
        <div className={classes.tagPanelHeader}>
          <LocalOfferIcon className={classes.mainIcon} />
          <Typography variant='h4' >
            Tags
          </Typography>
          <IconButton className={classes.addTagIconBtn} onClick={openDialog}>
            <AddIcon />
          </IconButton>
        </div>
        <Divider variant="fullWidth" />
        <Dialog open={createDialog} onClose={closeDialog}>
          <DialogTitle id='form-dialog-title'>Add a tag</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="name"
              label="Tag name"
              type="text"
              fullWidth
              onChange={updateNewTagName}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={submitCreatedTag} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
        <List className={classes.listroot} disablePadding>
          {Object.keys(sections()).map((sectionId) => (
            <>
              <ListSubheader
                key={`section-${sectionId}`}
                className={classes.listSection}
              >
                {sectionId}
              </ListSubheader>
              {sections()[sectionId].sort(function (tag1, tag2) {
                if (tags.dict[tag1].title.toLowerCase() < tags.dict[tag2].title.toLowerCase()) return -1;
                if (tags.dict[tag1].title.toLowerCase() > tags.dict[tag2].title.toLowerCase()) return 1;
                return 0;
              }).map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}
                  className={classes.listItem}
                  disableGutters
                  button
                  onClick={toggleTagPanel}
                  component={NavLink}
                  to={
                    tags.dict[item].note_ids.length ?
                      `/notebooks/all/notes/${tags.dict[item].note_ids[0]}/tags/${item}` :
                      `/notebooks/all/notes/none/tags/${item}`
                  }
                >
                  <ListItemText primary={`${tags.dict[item].title} (${tags.dict[item].note_ids.length})`} />
                  {current_note === 'none' || !current_note ?
                    null :
                    notes.dict[current_note].tag_ids.includes(item) ?
                      <Tooltip title="Remove Tag from Current Note" placement="top" arrow>
                        <IconButton onClick={e => { e.preventDefault(); removeTag(item); }}>
                          <ClearIcon />
                        </IconButton>
                      </Tooltip> :
                      <Tooltip title="Add Tag to Current Note" placement="top" arrow>
                        <IconButton onClick={e => { e.preventDefault(); addTagToNote(item); }}>
                          <AddIcon />
                        </IconButton>
                      </Tooltip>
                  }
                  <Tooltip title="Delete Tag" placement="top" arrow>
                    <IconButton onClick={e => { e.preventDefault(); deleteTag(item); }}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </>
          ))}
        </List>
      </Box>
    </Slide>
  );
};

export default TagPanel;
