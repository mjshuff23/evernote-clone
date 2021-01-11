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
import { useParams, useHistory } from 'react-router-dom';
import { SET_CURRENT_NOTEBOOK } from '../store/actions/ui';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "green",
        marginTop: 42,
        height: 60,
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

    const history = useHistory();
    const { current_notebook, current_note, current_tag } = useParams();
    const [tagName, setTagName] = useState('');

    const dispatch = useDispatch();

    const updateTagName = e => {
        setTagName(e.target.value);
    }

    const addTag = () => {
        const tag = dispatch(createTagThunk(user.id, tagName));
        // console.log(tag);
        dispatch(addTagToNoteThunk(current_note, tag.id));
        setTagName('');
        // console.log(tagId, tags, notes);
    }

    const removeTag = tagId => {
        if (current_tag === tagId) {
            history.push(`/notebooks/${current_notebook}/notes/${current_note}/tags/none`);
        }
        dispatch(removeTagFromNoteThunk(current_note, tagId));
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
