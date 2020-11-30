import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, List, ListItem, ListItemText, ListSubheader, Slide, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles/TagPanelStyles'
import { toggleTagPanel } from '../store/actions/ui';
import { createTag } from '../store/actions/tags';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const TagPanel = (props) => {
  const classes = useStyles();
  const tags = useSelector(state => state.tags);
  const ui = useSelector(state => state.ui);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [createDialog, setCreateDialog] = useState(false);
  const [newTagName, setNewTagName] = useState('');

  const sections = () => {
    let sectionMapping = new Map();
    [ '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ].forEach(section => {
      let filteredIds = tags.ids.filter(tagid => {
        if (section === '#') {
          return tags.dict[ tagid ].title.match(/^[^a-z]/i);
        }
        return tags.dict[ tagid ].title.match(new RegExp(`^[${section}]`, 'i'));
      });
      if (filteredIds.length > 0) {
        sectionMapping[ section ] = filteredIds;
      }
    });
    return sectionMapping;
  }

  const hideTagPanel = e => {
    dispatch(toggleTagPanel());
  }

  const openDialog = e => {
    setCreateDialog(true);
  }

  const closeDialog = e => {
    setCreateDialog(false);
  }

  const submitCreatedTag = e => {
    setCreateDialog(false);
    dispatch(createTag(user.id, newTagName));
  }

  const updateNewTagName = e => {
    setNewTagName(e.target.value);
  }

  if (Object.keys(ui).length === 0) return null;

  return (
    <Slide direction="right" in={ui.display_tag_panel} mountOnEnter unmountOnExit onBlur={hideTagPanel}>
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
          <Button onClick={submitCreatedTag}  color="primary">
            Create
          </Button>
        </DialogActions>
        </Dialog>
        <List className={classes.listroot} subheader={<li />}>
          {Object.keys(sections()).map((sectionId) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>{sectionId}</ListSubheader>
                {sections()[ sectionId ].sort(function (tag1, tag2) {
                  if (tags.dict[ tag1 ].title.toLowerCase() < tags.dict[ tag2 ].title.toLowerCase()) return -1;
                  if (tags.dict[ tag1 ].title.toLowerCase() > tags.dict[ tag2 ].title.toLowerCase()) return 1;
                  return 0;
                }).map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`${tags.dict[ item ].title} (${tags.dict[ item ].note_ids.length})`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Box>
    </Slide>
  );
}

export default TagPanel;
