import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from './styles/NotecardStyles';
import { Chip, ListItem } from "@material-ui/core";
import { useRouteMatch, NavLink } from 'react-router-dom';
import { removeHTMLTags } from '../services/utils';

function tagList(tag_ids, tags) {
    if (tag_ids.length === 0) return null;

    return (tag_ids.map(id => (
        <div key={id}>
            <Chip label={ tags.dict[id].title } />
        </div>
    )));
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
                    <Typography className={classes.title} variant='h6'>
                        { props.note.title }
                    </Typography>
                </div>
                <div className={classes.content}>
                    <Typography variant="body1">
                        { removeHTMLTags(props.note.content).slice(0, 50) }
                    </Typography>
                </div>
                <div className={classes.infobar}>
                    <Typography variant='body2' component='div'>
                        { props.note.updated_at.slice(0, -4) }
                    </Typography>
                    { tagList(props.note.tag_ids, props.tags) }
                </div>
            </div>
        </ListItem>
    );
}