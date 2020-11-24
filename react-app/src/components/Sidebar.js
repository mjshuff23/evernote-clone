import React, { useState } from 'react';
import { Button, Collapse, Container, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useStyles from './styles/SidebarStyles';

export default function Sidebar() {
  const classes = useStyles();
    const [ addingNote, setAddingNote ] = useState(false);
    const [ openNotebooks, setOpenNotebooks ] = useState(false);
    const [ openTags, setOpenTags ] = useState(false);
    // const [title, setTitle] = useState(null);

    function newNoteClick(e) {
        setAddingNote(true);
        console.log('NEW NOTE CLICKED');
    }

    function clickOpenNotebooks() {
        setOpenNotebooks(!openNotebooks);
    }

    function clickOpenTags() {
        setOpenTags(!openTags);
    }


    return (
      <Container className={classes.sidebarContainer}> 
            {/* <UserInfoDisplay /> => has button & popover*/}
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
                    {openTags ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openTags}>
                    <List component="div" disablePadding>
                        {/* actuall map through all Tags creating ListItems*/}
                        <ListItem button>
                            <ListItemText primary="First Tag" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Second Tag" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Container>
    );
}