import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import BookIcon from "@material-ui/icons/Book";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import NbPanelActionButton from './NbPanelActionButton';
import useStyles from "./styles/NotebookPanelStyles";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useRowStyles = makeStyles({

  nb_book_button: {
    textTranform: 'none',

  },

  book_icon: {
    color: '#9e9e9e',
    height: 20
  },

  down: {
    color: 'gray',
      '&:hover': {
        color: "black",
      },
  },

  heading: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'gray',
    padding: 20
  },

  hidden: {
    visibility: "hidden"
  },

  icon_button: {
    height: 30,
    backgroundColor: "white",
      '&:hover': {
        backgroundColor: "white"
      },
  },

  menu_item: {
    fontSize: 12
  },

  more_horiz:{
    fontSize: 15,
  },

  no_more_border: {
    boxShadow: 'none',
  },

  note_icon: {
    color: '#9e9e9e',
    height: 20
  },

  root: {
    "& > *": {
      borderBottom: "unset"
    }
  },
  set_width: {
    width: '400px',
    backgroundColor: 'tan'
  },
  typ_nav: {
    textDecoration: 'none',
    color: 'black',
      '&:hover': {
        color: "gray",
      },
  },

  up: {
    color: 'gray',
      '&:hover': {
        color: "black",
      },
  },

});



export default function NbPanelTable() {
  const notebooks = useSelector(state => state.notebooks)
  const notes = useSelector(state => state.notes)
  const user = useSelector(state => state.user)
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <TableContainer className={classes.no_more_border} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.heading} >TITLE</TableCell>
            <TableCell className={classes.heading} >CREATED BY</TableCell>
            <TableCell className={classes.heading} >UPDATED AT</TableCell>
            <TableCell className={classes.heading} >ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { notebooks.ids.map(id => (
            <>
              <TableRow className={classes.root}>
                <TableCell className={classes.set_width}>
                  {/* <IconButton className={classes.icon_button}
                    aria-label="expand row"

                  >
                    {open ? < KeyboardArrowUpIcon className = {
                        classes.up
                      }
                      /> : <KeyboardArrowDownIcon className={classes.down} />
                    }
                  </IconButton> */}
                  <span className={classes.nb_book_button}>
                    <BookIcon className={classes.book_icon} />
                      <Typography
                        className={classes.typ_nav}
                        button
                        component={ NavLink }
                        to={ notebooks.dict[id].note_ids.length ? `/notebooks/${id}/notes/${notebooks.dict[id].note_ids[0]}/tags/none`
                          :`/notebooks/${id}/notes/none/tags/none` }
                      >
                        {notebooks.dict[id].title}
                      </Typography>

                  </span>
                </TableCell>
                <TableCell >{user.username}</TableCell>
                <TableCell >{
                  `${notebooks.dict[id].updated_at.slice(8, 11)}
                    ${notebooks.dict[id].updated_at.slice(5, 7)},
                    ${notebooks.dict[id].updated_at.slice(12, 16)}
                  `
                }
                </TableCell>
                <TableCell >
                  <NbPanelActionButton notebookid={id}/>
              </TableCell>
            </TableRow>
              <TableRow>
                <TableCell
                //  {/* style={{ paddingBottom:0, paddingTop: 0 }} */}
                colSpan={4}>

                  {/* <Collapse in={open} timeout="auto" unmountOnExit> */}
                    <Box>
                      <Table
                      // size="small"
                      aria-label="notes">
                        <TableBody>
                          { notebooks.dict[id].note_ids.map((noteid) => (
                            <TableRow key={ `Note_Id: ${noteid}` }>
                              <TableCell className={classes.set_width}>
                                {/* <BookIcon className={classes.hidden}/>
                                <BookIcon className={classes.hidden}/>
                                <BookIcon className={classes.hidden}/>
                                <BookIcon className={classes.hidden}/> */}
                                <DescriptionOutlinedIcon className={classes.note_icon}/>
                                <Typography
                                  className={classes.typ_nav}
                                  button
                                  component={ NavLink }
                                  to={ `/notebooks/${id}/notes/${noteid}/tags/none` }
                                >
                                  {notes.dict[noteid].title}
                                </Typography>
                              </TableCell>
                              <TableCell >
                                {user.username}
                              </TableCell>
                              <TableCell > {
                                `${notes.dict[noteid].updated_at.slice(8, 11)}
                                  ${notes.dict[noteid].updated_at.slice(5, 7)},
                                  ${notes.dict[noteid].updated_at.slice(12, 16)}
                                `
                              } </TableCell>
                              <TableCell >
                                <NbPanelActionButton notebookid={id}/>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  {/* </Collapse> */}
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
