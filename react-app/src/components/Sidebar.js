import React, { useState } from 'react';
import { Button, Collapse, Container, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';

import UserInfoDisplay from './UserInfoDisplay';
import useStyles from './styles/SidebarStyles';
import { createNote } from '../store/actions/notes';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTagPanel } from '../store/actions/ui';

export default function Sidebar() {
    const classes = useStyles();

    const [openNotebooks, setOpenNotebooks] = useState(false);
    const [openTags, setOpenTags] = useState(false);

    const user = useSelector(state => state.user);
    const notebooks = useSelector(state => state.notebooks);
    const notes = useSelector(state => state.notes);
    const tags = useSelector(state => state.tags);
    const ui = useSelector(state => state.ui);

    const dispatch = useDispatch();

    function newNoteClick(e) {
        if (!user.id) return;
        let notebook = ui.current_notebook
        if (!notebook) {
            notebook = notebooks.ids[0];
        }
        dispatch(createNote(user.id, notebook));
    }

    function clickOpenNotebooks() {
        setOpenNotebooks(!openNotebooks);
    }

    function clickOpenTags() {
        setOpenTags(!openTags);
    }

    const handleTagsClick = () => {
        dispatch(toggleTagPanel());
    }

    if (Object.keys(notebooks).length === 0) return null;
    if (Object.keys(tags).length === 0) return null;

    return (
        <Container className={classes.sidebarContainer}>
            <UserInfoDisplay />
            <Button onClick={newNoteClick}> {/* className={ classes.newNoteBtn } */}
                New Note
            </Button>
            <List>
                <ListItem
                    button
                    component={NavLink}
                    to={notes.ids.length ? `/notebooks/all/notes/${notes.ids[0]}/tags/none` : `/notebooks/all/notes/none/tags/none`}
                >
                    <ListItemText primary="All Notes" />
                </ListItem>
                <ListItem button>
                    {
                        openNotebooks ? <ExpandLess onClick={clickOpenNotebooks} />
                            : <ExpandMore onClick={clickOpenNotebooks} />
                    }
                    <NavLink to={`/allnotebooks`} >
                        <ListItemText primary="Notebooks" />
                    </NavLink>
                </ListItem>
                <Collapse in={openNotebooks}>
                    <List component="div" disablePadding>
                        {notebooks.ids.map(id => (
                            <ListItem
                                button
                                component={NavLink}
                                to={notebooks.dict[id].note_ids.length ? `/notebooks/${id}/notes/${notebooks.dict[id].note_ids[0]}/tags/none` : `/notebooks/${id}/notes/none/tags/none`}>
                                <ListItemText primary={notebooks.dict[id].title} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <ListItem button >
                    {openTags ? <ExpandLess onClick={clickOpenTags} /> : <ExpandMore onClick={clickOpenTags} />}
                    <Button onClick={handleTagsClick} >
                        <ListItemText primary="Tags" />
                    </Button>
                </ListItem>
                <Collapse in={openTags}>
                    <List component="div" disablePadding>
                        {tags.ids.map(id => (
                            <ListItem
                                button
                                component={NavLink}
                                to={tags.dict[id].note_ids.length ? `/notebooks/all/notes/${tags.dict[id].note_ids[0]}/tags/${id}` : `/notebooks/all/notes/none/tags/${id}`}>
                                <ListItemText primary={tags.dict[id].title} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </List>
        </Container>
    );
}
