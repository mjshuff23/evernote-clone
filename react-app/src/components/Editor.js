import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './editorStyles';
import debounce from 'lodash/debounce';



function Editor({ classes }) {
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


export default withStyles(styles)(Editor);
