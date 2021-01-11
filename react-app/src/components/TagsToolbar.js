import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useSelector, useDispatch } from 'react-redux';
import { createTagThunk } from '../store/actions/tags';
import { addTagToNoteThunk, removeTagFromNoteThunk } from '../store/actions/notes';
import { useParams, useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'darkgray',
        marginTop: 42,
        height: 60,
    },
    paper: {
        margin: theme.spacing(0.25),
        textAlign: "center",
        backgroundColor: 'green',
        marginLeft: '0.25em',
        WebkitTapHighlightColor: theme.palette.common.transparent,
        cursor: 'pointer',
        '&:focus': {
            backgroundColor: emphasize('#008000', 0.08),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize('#008000', 0.12),
        },
    },
    newTagInput: {
        height: '2.85em',
        alignSelf: 'center',
        color: 'green',
        borderColor: 'green'
    }
}));


export default function TagsToolbar() {
    let { current_notebook, current_note, current_tag } = useParams();
    const classes = useStyles();
    const tags = useSelector(state => state.tags);
    const notes = useSelector(state => state.notes);
    const user = useSelector(state => state.user);

    let history = useHistory();
    const [tagName, setTagName] = useState('');

    const dispatch = useDispatch();

    const updateTagName = e => {
        setTagName(e.target.value);
    }

    const addTag = async () => {
        const tagId = await dispatch(createTagThunk(user.id, tagName));
        dispatch(addTagToNoteThunk(current_note, tagId));
        setTagName('');
    }

    const removeTag = tagId => {
        history.push(`/notebooks/${current_notebook}/notes/${current_note}/tags/${current_tag === tagId ? 'none' : current_tag}`);
        dispatch(removeTagFromNoteThunk(Number(current_note), tagId));
        window.location.reload(false);
    }

    if (!Object.keys(notes).length || !Object.keys(tags).length || current_note === 'none') {
        return null;
    } else {
        return (
            <Grid item xs={12} className={classes.root}>
                {notes.dict[current_note].tag_ids.map(tagId => (
                    <Chip
                        key={tagId}
                        icon={<LocalOfferIcon />}
                        className={classes.paper}
                        label={tags.dict[tagId].title.length < 12 ?
                            tags.dict[tagId].title :
                            tags.dict[tagId].title.slice(0, 10) + '...'}
                        onDelete={(e) => { e.stopPropagation(); removeTag(tagId) }} />
                ))}
                <TextField
                    variant="outlined"
                    margin="dense"
                    placeholder="Add tag"
                    className={classes.newTagInput}
                    value={tagName}
                    onChange={updateTagName} />
                <Button
                    variant='contained'
                    className={classes.newTagInput}
                    onClick={addTag}>
                    Add Tag
                </Button>
            </Grid>
        );
    }
}
