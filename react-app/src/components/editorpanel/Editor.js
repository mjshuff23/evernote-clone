import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import ReactQuill from 'react-quill';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import useStyles from '../../styles/editorpanel/EditorStyles';
import { deleteNote, updateNote } from '../../store/actions/notes';


export default function Editor() {
  const classes = useStyles();

  let [text, setText] = useState('');
  let [title, setTitle] = useState('');

  const history = useHistory();
  const { current_notebook, current_note, current_tag } = useParams();

  const notes = useSelector(state => state.notes);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (current_note === 'none' || !Object.keys(notes).length) return;
    setText(notes.dict[current_note].content);
    setTitle(notes.dict[current_note].title);
  }, [current_note]);

  function updateBody(content) {
    setText(content);
    let notebook_id = current_notebook;
    if (current_notebook === 'all') {
      notebook_id = notes.dict[current_note].notebook_id
    }
    dispatch(updateNote(
      user.id,
      notebook_id,
      current_note,
      content,
      notes.dict[current_note].title)
    );
  }

  function updateTitle(e) {
    setTitle(e.target.value);

    let notebook_id = current_notebook;
    if (current_notebook === 'all') {
      notebook_id = notes.dict[current_note].notebook_id
    }
    dispatch(updateNote(
      user.id,
      notebook_id,
      current_note,
      text,
      e.target.value)
    );
  }

  async function handleDelete() {
    let notebook_id = current_notebook;
    if (current_notebook === 'all') {
      notebook_id = notes.dict[current_note].notebook_id
    }
    let tag_ids = notes.dict[current_note].tag_ids;
    dispatch(deleteNote(
      user.id,
      notebook_id,
      current_note,
      tag_ids)
    );
    history.push(`/notebooks/${current_notebook}/notes/none/tags/${current_tag}`);
  }

  if (current_note === 'none') return null;

  return (
    <>
      <div className={classes.editorNoteTitle}>
        <input
          className={classes.editorNoteInput}
          type="text"
          value={title}
          onChange={updateTitle}
        />
        <IconButton
          aria-label="delete"
          component='div'
          onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
      <ReactQuill value={text} onChange={updateBody}></ReactQuill>
    </>
  );
}
