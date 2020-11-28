import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import useStyles from './styles/EditorStyles';
import debounce from 'lodash/debounce';



export default function Editor() {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    // const update = debounce(() => {
    //     console.log('UPDATING DB');
    // }, 2000);

    function updateBody(text) {
        setText(text);
        // update();
    }

    return (
        <div className={ classes.editorContainer }>
            <ReactQuill value={ text } onChange={ (text) => updateBody(text) }></ReactQuill>
        </div>
    );
}
