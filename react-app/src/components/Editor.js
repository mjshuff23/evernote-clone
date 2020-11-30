import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import useStyles from './styles/EditorStyles';
import debounce from 'lodash/debounce';


export default function Editor() {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const uiState = useSelector(state => state.ui);
    const notesState = useSelector(state => state.notes);

    // const update = debounce(() => {
    //     console.log('UPDATING DB');
    // }, 2000);

    useEffect(() => {
        if (uiState.current_note) {
            updateBody(notesState.dict[uiState.current_note].content);
            updateTitle(notesState.dict[uiState.current_note].title);
        }
    }, [uiState.current_note]);

    function updateBody(text) {
        setText(text);
        // update();
    }

    function updateTitle(title) {
        setTitle(title);
    }

    return (
        <div className={ classes.editorContainer }>
            <div className={ classes.editorNoteTitle }>
                { title }
            </div>
            <ReactQuill value={ text } onChange={ (text) => updateBody(text) }></ReactQuill>
        </div>
    );
}
