import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles/BottomTagBarStyles';
import { createTagThunk } from '../store/actions/tags';
import { Chip, Grid, IconButton, TextField } from '@material-ui/core';
import { LocalOfferIcon } from '@material-ui/icons/LocalOffer';

export default function BottomTagBar() {
    const dispatch = useDispatch();
    const [tagName, setTagName] = useState('');
    const notes = useSelector(state => state.notes);
    const tags = useSelector(state => state.tags);
    const user = useSelector(state => state.user);
    const classes = useStyles();
    

    const updateTagName = e => {
        setTagName(e.target.value);
    }

    const handleCreateTag = e => {
        dispatch(createTagThunk(user.id, tagName));
        setTagName('');
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <IconButton>
                <LocalOfferIcon size="small" />
            </IconButton>
            <Chip className={classes.paper} label="tag1" />
            <Chip className={classes.paper} label="Tag2" />
            <TextField
                onChange={updateTagName}
                variant="outlined"
                margin="dense"
                placeholder="Add tag"
            />
        </Grid>
    );
}
