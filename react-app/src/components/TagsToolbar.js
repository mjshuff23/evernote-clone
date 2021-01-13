import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useSelector, useDispatch } from 'react-redux';
import { createTagThunk, disassociateTagThunk } from '../store/actions/tags';
import { addTagToNoteThunk } from '../store/actions/notes';
import { useParams, useHistory } from 'react-router-dom';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#1A1A1A',
    marginTop: 42,
    height: 60,
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
  },
  tags: {
    flexShrink: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.5em',
    overflowX: 'scroll',
    // boxShadow: 'inset 0 -5px 5px 1px #1F1F1F',
    // borderBottom: '1px solid green',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
  tag: {
    // margin: theme.spacing(0.25),
    // textAlign: "center",
    marginLeft: '0.25em',
    // backgroundColor: '#008000',
    // WebkitTapHighlightColor: theme.palette.common.transparent,
    // cursor: 'pointer',
    // '&:focus &:hover': {
    //   backgroundColor: emphasize('#008000', 0.08),
    // },
    // '&:active': {
    //   backgroundColor: emphasize('#008000', 0.08),
    // },
  },
  newTagFormBar: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1em',
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
    deletable: {
      '&:hover, &:focus': {
        backgroundColor: emphasize('#007E22', 0.08)
      },
      '&:active': {
        backgroundColor: emphasize('#007E22', 0.08)
      }
    },
    margin: 'auto 0',
    marginLeft: '1em',
    borderRadius: '20px'
  },
}));


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
