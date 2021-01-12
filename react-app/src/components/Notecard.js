import React from "react";
import { useSelector } from 'react-redux';
import Typography from "@material-ui/core/Typography";
import useStyles from './styles/NotecardStyles';
import { Chip, ListItem } from "@material-ui/core";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { removeHTMLTags } from '../services/utils';
import Moment from 'react-moment';

function tagList(tag_ids, tags, classes) {
  if (tag_ids.length === 0) return null;

  const extra = tag_ids.slice(2).length;

  tag_ids = tag_ids.slice(0, 2);

  const jsx = (tag_ids.map(id => (
    <Chip
      key={`tag-chip-${id}`}
      size='small'
      icon={<LocalOfferIcon />}
      className={classes.singleTag}
      label={tags.dict[id].title.length < 7 ?
        tags.dict[id].title :
        tags.dict[id].title.slice(0, 4) + '...'} />
  )));

  if (extra) {
    jsx.push(
      <Chip key={`tag-chip-extra`} size='small' className={classes.singleTag} label={'+' + extra} />
    )
  }
  return jsx;
}

function displayContent(content) {
  content = removeHTMLTags(content);
  if (content.length > 75) {
    return content.slice(0, 72) + '...';
  } else {
    return content;
  }
}


export default function NoteCard({ noteId }) {
  const notes = useSelector(state => state.notes);
  const tags = useSelector(state => state.tags);
  const classes = useStyles();
  const match = useRouteMatch();

  if (!notes.dict[noteId]) return null;

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
            <Moment format='ll' className={classes.date}>
              {notes.dict[noteId].updated_at}
            </Moment>
          </Typography>
          <div className={classes.tags}>
            {tagList(notes.dict[noteId].tag_ids, tags, classes)}
          </div>
        </div>
      </div>
    </ListItem>
  );
}
