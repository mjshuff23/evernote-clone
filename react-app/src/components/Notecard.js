import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from './styles/NotecardStyles';
import { Chip, ListItem } from "@material-ui/core";
import { useRouteMatch, NavLink } from 'react-router-dom';
import { removeHTMLTags } from '../services/utils';
import Moment from 'react-moment';

function tagList(tag_ids, tags, classes) {
  if (tag_ids.length === 0) return null;

  const extra = tag_ids.slice(2).length;

  tag_ids = tag_ids.slice(0, 2);

  const jsx = (tag_ids.map(id => (
    <div className={classes.left} key={id}>
      <Chip label={tags.dict[id].title.length < 12 ?
        tags.dict[id].title :
        tags.dict[id].title.slice(0, 10) + '...'} />
    </div>
  )));

  if (extra) {
    jsx.push(
      <div className={classes.left}>
        <Chip label={'+' + extra} />
      </div>
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


export default function NoteCard(props) {
  const classes = useStyles();
  const match = useRouteMatch();

  if (!props.note) return null;

  return (
    <ListItem
      button
      className={classes.listitem}
      activeClassName={classes.selected}
      component={NavLink}
      to={`/notebooks/${match.params.current_notebook}/notes/${props.note.id}/tags/${match.params.current_tag}`}
    >
      <div className={classes.notecard}>
        <div>
          <Typography className={classes.title} variant='h5'>
            {props.note.title}
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">
            { displayContent(props.note.content) }
          </Typography>
        </div>
        <div className={classes.infobar}>
          <Typography variant='body2' component='div'>
            <Moment format='LL' >
              {props.note.updated_at}
            </Moment>
          </Typography>
          {tagList(props.note.tag_ids, props.tags, classes)}
        </div>
      </div>
    </ListItem>
  );
}