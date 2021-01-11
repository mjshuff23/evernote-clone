import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Typography from "@material-ui/core/Typography";
import useStyles from './styles/NotecardStyles';
import { Chip, ListItem } from "@material-ui/core";
import { useRouteMatch, NavLink } from 'react-router-dom';
import { removeHTMLTags } from '../services/utils';
import { removeTagFromNoteThunk } from '../store/actions/notes';
import { deleteTagThunk } from '../store/actions/tags';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Moment from 'react-moment';

function displayContent(content) {
  content = removeHTMLTags(content);
  if (content.length > 75) {
    return content.slice(0, 72) + '...';
  } else {
    return content;
  }
}

export default function NoteCard({ noteId }) {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const tags = useSelector(state => state.tags);
  const user = useSelector(state => state.user);

  const classes = useStyles();
  const match = useRouteMatch();

  const removeTag = tagId => {
    dispatch(removeTagFromNoteThunk(noteId, tagId));
    dispatch(deleteTagThunk(user.id, tagId));
  }

  if (!noteId || !Object.keys(notes.dict).length || !Object.keys(tags.dict).length || !notes.dict[noteId]) return null;
  return (
    <ListItem
      button
      className={classes.listitem}
      activeClassName={classes.selected}
      component={NavLink}
      to={`/notebooks/${match.params.current_notebook}/notes/${noteId}/tags/${match.params.current_tag}`}
    >
      <div className={classes.notecard}>
        <div>
          <Typography className={classes.title} variant='h6'>
            {notes.dict[noteId].title}
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">
            {displayContent(notes.dict[noteId].content)}
          </Typography>
        </div>
        <div className={classes.infobar}>
          <Typography variant='body2' component='div'>
            {notes.dict[noteId].updated_at.slice(0, -4)}
          </Typography>
          <div>
            {notes.dict[noteId].tag_ids.map(tagId => (
              <Chip
                size='small'
                icon={<LocalOfferIcon />}
                className={classes.singleTag}
                key={tagId} label={tags.dict[tagId].title < 12 ?
                  tags.dict[tagId].title :
                  tags.dict[tagId].title.slice(0, 10) + '...'}
                onDelete={() => removeTag(tagId)} />
            ))}
          </div>
        </div>
      </div>
    </ListItem>
  );
}
