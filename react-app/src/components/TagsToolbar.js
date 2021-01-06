import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Grid, IconButton, TextField } from '@material-ui/core';
import { LocalOfferIcon } from '@material-ui/icons/LocalOffer';
import { useSelector } from 'react-redux';
import { createTagThunk } from '../store/actions/tags';

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

    const addTag = () => {
        dispatch(createTagThunk(tagName));
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <IconButton>
                <LocalOfferIcon size="small" />
            </IconButton>
            {notes[ui.currentNote].tagIds.map(tagId => (
                <Chip className={classes.paper} label={tags[tagId].name} />
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
