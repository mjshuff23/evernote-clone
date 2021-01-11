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
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: '#1A1A1A',
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
        margin: 'auto 0.25em',
        '& .MuiOutlinedInput-root': {
            margin: 'auto 0.25em',
            '& fieldset': {
                borderColor: 'white',
                borderRadius: '20px',
            },
            '&:hover fieldset': {
                borderColor: 'green',
                borderRadius: '20px',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
                borderRadius: '20px',
            },
        },
        '& .MuiOutlinedInput-input': {
            color: 'white',
            "&::placeholder": {
                color: "lightgray"
            },
        }
    },
    addTagBtn: {
        backgroundColor: '#008F26',
        color: 'white',
        '&:hover': {
            backgroundColor: '#007E22'
        },
        margin: 'auto 0',
        borderRadius: '20px'
    },
    newTagFormBar: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto'
    },
    noteTags: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '0.5em'
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
    }

    if (!Object.keys(notes).length || !Object.keys(tags).length || current_note === 'none') {
        return null;
    } else {
        return (
            <Grid item xs={12} className={classes.root}>
                <div className={classes.noteTags}>
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
                </div>
                <div className={classes.newTagFormBar}>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        placeholder="Add tag"
                        className={classes.newTagInput}
                        value={tagName}
                        onChange={updateTagName} />
                    <Button
                        variant='contained'
                        className={classes.addTagBtn}
                        onClick={addTag}>
                        Add Tag
                    </Button>
                </div>
            </Grid>
        );
    }
}
