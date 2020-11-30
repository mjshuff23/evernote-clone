import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from './styles/NotecardStyles';
import { Chip, ListItem } from "@material-ui/core";
import { useRouteMatch, NavLink } from 'react-router-dom';

function tagList(tag_ids, tags) {
    if (tag_ids.length === 0) return null;

    return (tag_ids.map(id => (
        <div>
            <Chip label={ tags.dict[id].title }/>
        </div>
    )));
}

export default function SimpleCard(props) {
    const classes = useStyles();
    const match = useRouteMatch();

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
                        {props.note.content}
                    </Typography>
                </div>
                <div className={classes.infobar}>
                    <Typography variant='body2' component='div'>
                        { props.note.updated_at }
                    </Typography>
                    { tagList(props.note.tag_ids, props.tags) }
                </div>
            </div>
        </ListItem>
    );
}