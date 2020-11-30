import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Box } from '@material-ui/core';
import useStyles from './styles/NoteInfoPanelStyles';
import { useParams } from 'react-router-dom';
import { setCurrentNote, setCurrentNotebook, setCurrentTag } from '../store/actions/ui';



export default function NoteInfoPanel() {
    const classes = useStyles();
    let { current_notebook, current_note, current_tag } = useParams();
    const dispatch = useDispatch();

    // console.log('ROUTER STUFF', current_notebook, current_note, current_tag);

    useEffect(() => {
        current_note = current_note === 'none' ? null : Number(current_note);
        current_notebook = current_notebook === 'all' ? null : Number(current_notebook);
        current_tag = current_tag === 'none' ? null : Number(current_tag);
        dispatch(setCurrentNote(current_note));
        dispatch(setCurrentNotebook(current_notebook));
        dispatch(setCurrentTag(current_tag));
    }, [current_note, current_notebook, current_tag, dispatch]);

    return (
        <Box className={ classes.noteinfopanel }>

        </Box>
    );
}
