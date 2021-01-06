import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Grid, IconButton, TextField } from '@material-ui/core';
import { LocalOfferIcon } from '@material-ui/icons/LocalOffer';
import { useSelector } from 'react-redux';
import { createTagThunk } from '../store/actions/tags';
import { addTagToNoteThunk, removeTagFromNoteThunk } from '../store/actions/notes';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        backgroundColor: "green"
    },
    paper: {
        margin: theme.spacing(0.25),
        textAlign: "center"
    }
}));


export default function TagsToolbar() {
    const classes = useStyles();
    const tags = useSelector(state => state.tags);
    const ui = useSelector(state => state.ui);
    const notes = useSelector(state => state.notes);
    const [tagName, setTagName] = useState('');
    const dispatch = useDispatch();

    const updateTagName = e => {
        setTagName(e.target.value);
    }

    const addTag = async () => {
        let tagId = await dispatch(createTagThunk(tagName));
        await dispatch(addTagToNoteThunk(ui.currentNote, tagId));
    }

    const removeTag = e => {
        await dispatch(removeTagFromNoteThunk(ui.currentNote, e.target.id));
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <IconButton>
                <LocalOfferIcon size="small" />
            </IconButton>
            {notes[ui.currentNote].tagIds.map(tagId => (
                <Chip key={tagId} id={tagId} className={classes.paper} label={tags[tagId].name} onDelete={removeTag} />
            ))}
            <TextField
                variant="outlined"
                margin="dense"
                placeholder="Add tag"
                value={tagName}
                onChange={updateTagName} />
            <Button onClick={addTag}>Add Tag</Button>
        </Grid>
    );
}
