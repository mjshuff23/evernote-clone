import React, { useState } from 'react';
import { Button, Popover } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './sidebarStyles';
// import SidebarItem from './SidebarItem';

function Sidebar({ notes, classes, noteIndex }) {
    const [addingNote, setAddingNote] = useState(false);
    // const [title, setTitle] = useState(null);

    function newNoteClick(e) {
        setAddingNote(true);
        console.log('NEW NOTE CLICKED');
    }



    return (
        <div className={ `${classes.sidebarContainer} sidebar` }>
            <Button onClick={ newNoteClick } className={ classes.newNoteBtn }>
                New Note
            </Button>
            <Popover
                anchorReference="anchorPosition"
                anchorPosition={ { top: 350, left: 800 } }
                anchorOrigin={ {
                    vertical: 'center',
                    horizontal: 'center',
                } }
                transformOrigin={ {
                    vertical: 'center',
                    horizontal: 'center',
                } }
                open={ addingNote }
                onClose={ () => setAddingNote(!addingNote) }
            >
                <div>Add Note Title Here OR Automatically create a blank Note in current Notebook!</div>
            </Popover>
        </div>
    );
}


export default withStyles(styles)(Sidebar);
