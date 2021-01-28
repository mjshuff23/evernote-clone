import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import TextField from '@material-ui/core/TextField';

import useStyles from '../../styles/editorpanel/TagsToolbarStyles';
import { createTagThunk, disassociateTagThunk } from '../../store/actions/tags';
import { addTagToNoteThunk } from '../../store/actions/notes';


export default function TagsToolbar() {
  let { current_notebook, current_note, current_tag } = useParams();
  const classes = useStyles();
  const tags = useSelector(state => state.tags);
  const notes = useSelector(state => state.notes);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => { }, [notes.dict[current_note].tag_ids]);

  let history = useHistory();
  const [tagName, setTagName] = useState('');

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
    dispatch(disassociateTagThunk(Number(current_note), tagId));
  }

  if (!Object.keys(notes).length || !Object.keys(tags).length || current_note === 'none') {
    return null;
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.tags}>
          {notes.dict[current_note].tag_ids.map(tagId => (
            <Chip
              key={tagId}
              icon={<LocalOfferIcon />}
              className={classes.tag}
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
      </div>
    );
  }
}
