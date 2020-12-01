import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, List, ListItem, ListItemText, ListSubheader, Menu, MenuItem, Slide, TextField, Tooltip, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles/TagPanelStyles'
import { toggleTagPanel } from '../store/actions/ui';
import { createTagThunk, deleteTag } from '../store/actions/tags';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { deleteTagFromNotes, removeTagFromNoteThunk } from '../store/actions/notes';
import { removeNoteFromTag, addNoteToTag, deleteTagThunk } from '../store/actions/tags';

const TagPanel = () => {
  const classes = useStyles();
  const notes = useSelector(state => state.notes);
  const tags = useSelector(state => state.tags);
  const ui = useSelector(state => state.ui);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [createDialog, setCreateDialog] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

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

  const openActions = e => {
    setAnchorEl(e.currentTarget);
  }

  const closeActions = e => {
    setAnchorEl(null);
  }

  const deleteAction = (tagid) => {
    setAnchorEl(null);
    dispatch(deleteTagFromNotes(tagid, tags.dict[tagid].note_ids));
    dispatch(deleteTagThunk(tagid))
  }

  const tagNoteAction = (tagid) => {
    setAnchorEl(null);
    dispatch(addTagToNoteThunk(ui.current_note, tagid));
    dispatch(addNoteToTag(ui.current_note, tagid));
  }

  const untagNoteAction = (tagid) => {
    setAnchorEl(null);
    dispatch(removeTagFromNoteThunk(ui.current_note, tagid));
    dispatch(removeNoteFromTag(ui.current_note, tagid));
  }

  if (Object.keys(ui).length === 0 || tags.ids.length === 0) return null;

  return (
    <Slide direction="right" in={ui.display_tag_panel} mountOnEnter unmountOnExit>
      <Box className={classes.tagPanel}>
        <Typography variant='h4' className={classes.tagPanelHeader}>
          Tags <IconButton className={classes.tagIcon} onClick={openDialog}><LocalOfferIcon /></IconButton>
          <Divider variant="fullWidth" />
        </Typography>
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
        <List className={classes.listroot} subheader={<li />}>
          {Object.keys(sections()).map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>{sectionId}</ListSubheader>
                {sections()[sectionId].sort(function (tag1, tag2) {
                  if (tags.dict[tag1].title.toLowerCase() < tags.dict[tag2].title.toLowerCase()) return -1;
                  if (tags.dict[tag1].title.toLowerCase() > tags.dict[tag2].title.toLowerCase()) return 1;
                  return 0;
                }).map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}
                    button
                    component={NavLink}
                    to={tags.dict[item].note_ids.length ? `/notebooks/all/notes/${tags.dict[item].note_ids[0]}/tags/${item}` : `/notebooks/all/notes/none/tags/${item}`}>
                    <ListItemText primary={`${tags.dict[item].title} (${tags.dict[item].note_ids.length})`} />
                    <Tooltip className={classes.tooltip} title="More actions" placement="top" arrow>
                      <MoreHorizIcon className={classes.more_horiz} aria-controls="simple-menu" aria-haspopup="true" onClick={openActions} />
                    </Tooltip>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={closeActions}
                    >
                      <MenuItem className={classes.menu_item} onClick={() => deleteAction(item)}>Delete Tag</MenuItem>
                      <MenuItem className={classes.menu_item} onClick={() => tagNoteAction(item)}>Add to Note</MenuItem>
                      <MenuItem className={classes.menu_item} onClick={() => untagNoteAction(item)}>Remove from Note</MenuItem>
                    </Menu>
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Box>
    </Slide>
  );
};

export default TagPanel;
