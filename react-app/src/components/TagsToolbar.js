import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useSelector, useDispatch } from 'react-redux';
import { createTagThunk, deleteTagThunk } from '../store/actions/tags';
import { addTagToNoteThunk, removeTagFromNoteThunk } from '../store/actions/notes';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "green",
        maxHeight: '3.5em',
    },
    paper: {
        margin: theme.spacing(0.25),
        textAlign: "center",
        backgroundColor: '#999',
        marginLeft: '0.25em'
    },
    newTagInput: {
        height: '2.85em',
        alignSelf: 'flex-start',
        marginTop: '0.4em',
        marginLeft: '0.25em'
    }
}));


export default function TagsToolbar() {
    const classes = useStyles();
    const tags = useSelector(state => state.tags);
    const notes = useSelector(state => state.notes);
    const user = useSelector(state => state.user);

    const { current_note } = useParams();
    const [tagName, setTagName] = useState('');

    const dispatch = useDispatch();

    const updateTagName = e => {
        setTagName(e.target.value);
    }

    const addTag = () => {
        const tagId = dispatch(createTagThunk(user.id, tagName));
        dispatch(addTagToNoteThunk(current_note, tagId));
        setTagName('');
        // console.log(tagId, tags, notes);
    }

    const removeTag = tagId => {
        dispatch(removeTagFromNoteThunk(current_note, tagId));
        dispatch(deleteTagThunk(user.id, tagId));
    }

    if (!Object.keys(notes).length || !Object.keys(tags).length || current_note === 'none') {
        return null;
    } else {
        // console.log(tags, notes, notes.dict[current_note]);
        return (
            <Grid item xs={12} className={classes.root}>
                {notes.dict[current_note].tag_ids.map(tagId => (
                    <Chip key={tagId} id={tagId} icon={<LocalOfferIcon />} className={classes.paper} label={tags.dict[tagId].title} onDelete={() => removeTag(tagId)} />
                ))}
                <TextField
                    variant="outlined"
                    margin="dense"
                    placeholder="Add tag"
                    className={classes.newTagInput}
                    value={tagName}
                    onChange={updateTagName} />
                <Button
                    variant='outlined'
                    className={classes.newTagInput}
                    onClick={addTag}>
                    Add Tag
                </Button>
            </Grid>
        );
    }
}
