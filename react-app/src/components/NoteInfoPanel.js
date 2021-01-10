import React, { useEffect, useState } from 'react';
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
    let [title, setTitle] = useState('');
    let [noteIds, setNoteIds] = useState([]);
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

    useEffect(() => {
        if (current_notebook === 'all') {
            setTitle('All Notes');
            if (current_tag === 'none') {
                setNoteIds(notes.ids);
            } else {
                setNoteIds(tags.dict[current_tag].note_ids);
            }
        } else {
            setTitle(notebooks.dict[current_notebook].title);
            setNoteIds(notebooks.dict[current_notebook].note_ids);
        }
    }, [current_notebook, current_tag, notes, tags, notebooks]);

    if (!Object.keys(notebooks).length || !Object.keys(tags).length ) return null;
    
    return (
        <Box className={classes.noteinfopanel}>
            <Box className={classes.header}>
                <Typography className={classes.title} variant="h4" component='div'>
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
                        className="chip"
                        icon={<LocalOfferIcon />}
                        label={tags.dict[current_tag].title}
                    />
                </Box>
            }
            <Box className={classes.notelist}>
                { noteIds.map(id => (
                    <Notecard noteId={id} key={id}/>
                )) }
            </Box>
        </Box>
    );
}
