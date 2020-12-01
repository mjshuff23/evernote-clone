import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import useStyles from './styles/EditorStyles';
import debounce from 'lodash/debounce';
import { updateNote } from '../store/actions/notes';
import { setCurrentNotebook } from '../store/actions/ui';

export default function Editor() {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [currentNote, setCurrentNote] = useState({});
    const uiState = useSelector(state => state.ui);
    const notesState = useSelector(state => state.notes);
    const userState = useSelector(state => state.user);

    const dispatch = useDispatch();
    // const update = debounce(() => {
    //     console.log('UPDATING DB');
    // }, 2000);

    useEffect(() => {
        if (uiState.current_note) {
            setText(notesState.dict[uiState.current_note].content);
            setTitle(notesState.dict[uiState.current_note].title);
            setCurrentNote(notesState.dict[uiState.current_note]);
            if (!uiState.current_notebook) {
                dispatch(setCurrentNotebook(1));
            }
        }
    }, [uiState.current_note, notesState.ids]);



    function updateBody(text) {
        setText(text);
        if (!uiState.current_notebook) {
            dispatch(updateNote(
                userState.id,
                notesState.dict[uiState.current_note].notebook_id,
                uiState.current_note,
                text,
                notesState.dict[uiState.current_note].title));
        }
        dispatch(updateNote(
            userState.id,
            uiState.current_notebook,
            uiState.current_note,
            text,
            notesState.dict[uiState.current_note].title));
    }

    function updateTitle(e) {
        setTitle(e.target.value);

        if (!uiState.current_notebook) {
            dispatch(updateNote(
                userState.id,
                notesState.dict[uiState.current_note].notebook_id,
                uiState.current_note,
                notesState.dict[uiState.current_note].content,
                e.target.value));
        }

        dispatch(updateNote(
            userState.id,
            uiState.current_notebook,
            uiState.current_note,
            notesState.dict[uiState.current_note].content,
            e.target.value));

    }

    return (
        <div className={ classes.editorContainer }>
            <div className={ classes.editorNoteTitle }>
                <input className={ classes.editorNoteInput } type="text" value={ title } onChange={ updateTitle } />
            </div>
            <ReactQuill value={ text } onChange={ (text) => updateBody(text) }></ReactQuill>
        </div>
    );
}
