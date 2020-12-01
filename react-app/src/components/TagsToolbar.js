import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Grid, IconButton, TextField } from '@material-ui/core';
import { LocalOfferIcon } from '@material-ui/icons/LocalOffer';

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
    

    return (
        <Grid item xs={12} className={classes.root}>
            <IconButton>
                <LocalOfferIcon size="small" />
            </IconButton>
            <Chip className={classes.paper} label="tag1" />
            <Chip className={classes.paper} label="Tag2" />
            <TextField
                variant="outlined"
                margin="dense"
                placeholder="Add tag"/>
        </Grid>
    );
}
