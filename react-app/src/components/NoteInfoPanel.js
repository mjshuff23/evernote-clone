import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, Chip, Typography } from '@material-ui/core';
import useStyles from './styles/NoteInfoPanelStyles';
import { useParams } from 'react-router-dom';
import { setCurrentNote, setCurrentNotebook, setCurrentTag } from '../store/actions/ui';
import Notecard from './Notecard';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


export default function NoteInfoPanel() {
    const classes = useStyles();
    const { current_notebook, current_note, current_tag } = useParams();
    const notebooks = useSelector(state => state.notebooks);
    const notes = useSelector(state => state.notes);
    const tags = useSelector(state => state.tags);
    const dispatch = useDispatch();

    useEffect(() => {
        const note = current_note === 'none' ? null : Number(current_note);
        const notebook = current_notebook === 'all' ? null : Number(current_notebook);
        const tag = current_tag === 'none' ? null : Number(current_tag);
        dispatch(setCurrentNote(note));
        dispatch(setCurrentNotebook(notebook));
        dispatch(setCurrentTag(tag));
    }, [current_note, current_notebook, current_tag, dispatch]);

    if (!Object.keys(notebooks).length || !Object.keys(tags).length ) return null;

    let title, noteIds = null;
    if (current_notebook === 'all') {
        title = 'All Notes'
        if (current_tag === 'none') {
            noteIds = notes.ids;
        } else {
            noteIds = tags.dict[current_tag].note_ids;
        }
    } else {
        title = notebooks.dict[current_notebook].title;
        noteIds = notebooks.dict[current_notebook].note_ids;
    }
    return (
        <Box className={classes.noteinfopanel}>
            <Box className={classes.header}>
                <Typography variant="h5" component='div'>
                    { title }
                </Typography>
                <Box className={classes.headerInfo}>
                    <Typography variant="subtitle1" component='div'>
                        {noteIds.length } notes
                    </Typography>
                </Box>
            </Box>
            {
                current_tag === 'none' ? null :
                <Box className={classes.tagbox}>
                    <Chip
                        className={classes.chip}
                        icon={<LocalOfferIcon />}
                        label={tags.dict[current_tag].title}
                    />
                </Box>
            }
            <Box className={classes.notelist}>
                { noteIds.map(id => (
                    <Notecard note={notes.dict[id]} tags={tags} key={id}/>
                )) }
            </Box>
        </Box>
    );
}
