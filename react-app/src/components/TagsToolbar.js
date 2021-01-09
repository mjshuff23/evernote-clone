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
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        backgroundColor: "green",
        position: 'fixed',
        bottom: 0,
        right: 0,
        height: '10vh',
        backgroundColor: '#555'
    },
    paper: {
        margin: theme.spacing(0.25),
        textAlign: "center"
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

    const addTag = async () => {
        let tagId = await dispatch(createTagThunk(user.id, tagName));
        await dispatch(addTagToNoteThunk(current_note, tagId));
        setTagName('');
    }

    const removeTag = async tagId => {
        await dispatch(removeTagFromNoteThunk(current_note, tagId));
        await dispatch(deleteTagThunk(user.id, tagId));
    }

    if (!Object.keys(notes).length || !Object.keys(tags).length || current_note === 'none') {
        return null;
    } else {
        console.log(tags.dict);
        return (
            <Grid item xs={12} className={classes.root}>
                {notes.dict[current_note].tag_ids.map(tagId => (
                    <Chip size='small' key={tagId} id={tagId} icon={<LocalOfferIcon />} className={classes.paper} label={tags.dict[tagId].title} onDelete={() => removeTag(tagId)} />
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

}
