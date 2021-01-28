import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

import Collapse from "@material-ui/core/Collapse";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Hidden } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from '@material-ui/core/Typography';

import useStyles from '../../styles/notebookpanel/NbPanelTableStyles';
import NotebookActionButton from './NotebookActionButton';


export default function NbPanelTable() {
  const notebooks = useSelector(state => state.notebooks)
  const notes = useSelector(state => state.notes)
  const user = useSelector(state => state.user)
  const [open, setOpen] = React.useState({});
  const classes = useStyles();

  useEffect(() => {
    const openMap = {};
    notebooks.ids.forEach(id => {
      openMap[id] = false;
    });
    setOpen(openMap);
  }, [notebooks]);

  const createNotebookRow = (id) => {
    return (
      <TableRow className={classes.row} key={`notebook-${id}`}>
        <TableCell >
          <div className={classes.title}>
            <IconButton
              size='small'
              className={classes.clickable}
              aria-label="expand row"
              onClick={() => setOpen({ ...open, [id]: !open[id] })}
            >
              {
                open[id] ?
                  <KeyboardArrowUpIcon /> :
                  <KeyboardArrowDownIcon />
              }
            </IconButton>
            <MenuBookIcon className={classes.icon} />
            <Typography
              className={classes.title_text}
              component={NavLink}
              to={notebooks.dict[id].note_ids.length ?
                `/notebooks/${id}/notes/${notebooks.dict[id].note_ids[0]}/tags/none` :
                `/notebooks/${id}/notes/none/tags/none`
              }
            >
              {notebooks.dict[id].title}
            </Typography>
          </div>
        </TableCell>
        <Hidden smDown>
          <TableCell>{user.username}</TableCell>
          <TableCell>
            <Moment format='ll'>
              {notebooks.dict[id].updated_at}
            </Moment>
          </TableCell>
        </Hidden>
        <TableCell>
          <NotebookActionButton notebookId={id} />
        </TableCell>
      </TableRow>
    )
  }

  const createNoteTable = (id) => {
    return (
      <TableRow key={`notebook-${id}-noteTable`}>
        <TableCell style={{ padding: 0 }}>
          <Collapse in={open[id]} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="notes">
              <TableBody>
                {notebooks.dict[id].note_ids.map((noteid) => (
                  <TableRow key={`Note_Id: ${noteid}`} className={classes.row}>
                    <TableCell>
                      <div className={`${classes.title} ${classes.padLeft}`}>
                        <DescriptionOutlinedIcon className={classes.icon} />
                        <Typography
                          className={classes.title_text}
                          component={NavLink}
                          to={`/notebooks/${id}/notes/${noteid}/tags/none`}
                        >
                          {notes.dict[noteid].title}
                        </Typography>
                      </div>
                    </TableCell>
                    <Hidden smDown>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>
                        <Moment format='ll'>
                          {notes.dict[noteid].updated_at}
                        </Moment>
                      </TableCell>
                    </Hidden>
                    <TableCell>
                      {/* <NbPanelActionButton /> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    )
  }

  const createRow = (id) => {
    return (
      <React.Fragment key={`fragment-${id}`}>
        {createNotebookRow(id)}
        {createNoteTable(id)}
      </React.Fragment>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell className={`${classes.heading} ${classes.padLeft}`}>TITLE</TableCell>
            <Hidden smDown>
              <TableCell className={classes.heading} >CREATED BY</TableCell>
              <TableCell className={classes.heading} >UPDATED AT</TableCell>
            </Hidden>
            <TableCell className={classes.heading} >ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notebooks.ids.map(id => (
            createRow(id)
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}