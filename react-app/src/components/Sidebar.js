import React, { useState } from 'react';
import { Button, Collapse, Container, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';

import UserInfoDisplay from './UserInfoDisplay';
import useStyles from './styles/SidebarStyles';
import { createNote } from '../store/actions/notes';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import NotesIcon from '@material-ui/icons/Notes';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import { toggleTagPanel } from '../store/actions/ui';


export default function Sidebar() {
  const classes = useStyles();

  const history = useHistory();
  const match = useRouteMatch('/notebooks/:current_notebook/notes/');

  const [openNotebooks, setOpenNotebooks] = useState(false);
  const [openTags, setOpenTags] = useState(false);

  const user = useSelector(state => state.user);
  const notebooks = useSelector(state => state.notebooks);
  const notes = useSelector(state => state.notes);
  const tags = useSelector(state => state.tags);
  const ui = useSelector(state => state.ui);

  const dispatch = useDispatch();

  async function newNoteClick(e) {
    if (!user.id) return;
    let notebook = ui.current_notebook;
    if (!notebook) {
      notebook = notebooks.ids[0];
    }
    const note = await dispatch(createNote(user.id, notebook));
    // You are not looking at the notes page
    if (!match) {
      history.push(`/notebooks/${notebook}/notes/${note.id}/tags/none`);
    } else {
      history.push(`${match.url}/${note.id}/tags/none`);
    }
  }

  function clickOpenNotebooks() {
    setOpenNotebooks(!openNotebooks);
  }

  function clickOpenTags() {
    setOpenTags(!openTags);
  }

  const handleTagsClick = () => {
    dispatch(toggleTagPanel());
  };

  if (Object.keys(notebooks).length === 0) return null;
  if (Object.keys(tags).length === 0) return null;

  return (
    <Container className={classes.sidebarContainer}>
      <UserInfoDisplay />
      <Button onClick={newNoteClick} className={classes.newNoteBtn}>
        <AddIcon className={classes.icon} />
        <span className={classes.buttonText}>
          <Typography>
            New Note
          </Typography>
        </span>
      </Button>
      <List disablePadding>
        <ListItem
          disableGutters
          button
          component={NavLink}
          className={classes.listItem}
          to={notes.ids.length ?
            `/notebooks/all/notes/${notes.ids[0]}/tags/none` :
            `/notebooks/all/notes/none/tags/none`
          }
        >
          <div className={classes.arrow} />
          <div className={classes.notArrow}>
            <NotesIcon className={classes.icon} />
            <ListItemText
              className={classes.buttonText}
              primary="All Notes"
            />
          </div>
        </ListItem>
        <ListItem
          disableGutters
          button
          className={classes.listItem}
        >
          {
            openNotebooks ?
              <ExpandLess onClick={clickOpenNotebooks} className={classes.arrow} /> :
              <ExpandMore onClick={clickOpenNotebooks} className={classes.arrow} />
          }
          <NavLink 
            to={`/allnotebooks`} 
            className={`${classes.notArrow} notebooks-link`} 
          >
            <MenuBookIcon className={classes.icon} />
            <ListItemText className={classes.buttonText} primary="Notebooks" />
          </NavLink>
        </ListItem>
        <Collapse in={openNotebooks}>
          <List 
            component="div" 
            disablePadding
            className={classes.subList}
          >
            {notebooks.ids.map(id => (
              <ListItem
                className={classes.subListItem}
                disableGutters
                key={`notebook-${id}`}
                button
                component={NavLink}
                to={
                  notebooks.dict[id].note_ids.length ? 
                    `/notebooks/${id}/notes/${notebooks.dict[id].note_ids[0]}/tags/none` : 
                    `/notebooks/${id}/notes/none/tags/none`
                }
              >
                <MenuBookOutlinedIcon 
                  fontSize='small' 
                  className={classes.subIcon} 
                />
                <ListItemText 
                  primary={notebooks.dict[id].title} 
                  className={classes.buttonText}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem
          disableGutters
          button
          className={classes.listItem}
        >
          {
            openTags ?
              <ExpandLess onClick={clickOpenTags} className={classes.arrow} /> :
              <ExpandMore onClick={clickOpenTags} className={classes.arrow} />
          }
          <div className={classes.notArrow} onClick={handleTagsClick}>
            <LocalOfferIcon className={classes.icon} />
            <ListItemText className={classes.buttonText} primary="Tags" />
          </div>
        </ListItem>
        <Collapse in={openTags}>
          <List
            component="div"
            disablePadding
            className={classes.subList}
          >            
            {tags.ids.map(id => (
              <ListItem
                className={classes.subListItem}
                disableGutters
                key={`tag-${id}`}
                button
                component={NavLink}
                to={tags.dict[id].note_ids.length ? `/notebooks/all/notes/${tags.dict[id].note_ids[0]}/tags/${id}` : `/notebooks/all/notes/none/tags/${id}`}
              >
                <LocalOfferOutlinedIcon 
                  fontSize='small' 
                  className={classes.subIcon} 
                />
                <ListItemText 
                  primary={tags.dict[id].title} 
                  className={classes.buttonText}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Container>
  );
}
