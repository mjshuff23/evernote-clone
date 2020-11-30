import React, { useState } from 'react';
import { Button, Collapse, Container, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import UserInfoDisplay from './UserInfoDisplay';
import useStyles from './styles/SidebarStyles';
import { createNote } from '../store/actions/notes';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTagPanelThunk } from '../store/actions/ui';

export default function Sidebar() {
    const classes = useStyles();
    const [ openNotebooks, setOpenNotebooks ] = useState(false);
    // This is just a test, but since we will be using this across multiple
    //  components, I believe we should put this in our Redux Store.
    const [ currentNotebookId, setCurrentNotebookId ] = useState(1);
    const openTags = useSelector(state => state.ui.display_tag_panel);
    // const [openTags, setOpenTags] = useState(false);
    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();

    async function newNoteClick(e) {
        // Make sure they're logging in
        if (!userState.id) return;
        // We have a user id and notebook id, time to dispatch
        dispatch(createNote(userState.id, currentNotebookId));
        console.log('NEW NOTE CLICKED');
    }

    function clickOpenNotebooks() {
        setOpenNotebooks(!openNotebooks);
    }

    function clickOpenTags() {
        dispatch(toggleTagPanelThunk());
    }


    return (
        <Container className={classes.sidebarContainer}>
            <UserInfoDisplay />
            <Button onClick={newNoteClick}> {/* className={ classes.newNoteBtn } */}
                New Note
            </Button>
            <List>
                <ListItem button>
                    <ListItemText primary="All Notes" />
                </ListItem>
                <ListItem button onClick={clickOpenNotebooks}>
                    <ListItemText primary="Notebooks" />
                    {openNotebooks ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openNotebooks}>
                    <List component="div" disablePadding>
                        {/* actuall map through all notebooks creating ListItems*/}
                        <ListItem button>
                            <ListItemText primary="First Notebook" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Second Notebook" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={clickOpenTags}>
                    <ListItemText primary="Tags" />
                </ListItem>

            </List>
        </Container>
    );
}
