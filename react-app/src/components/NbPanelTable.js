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

const useRowStyles = makeStyles({

  book_icon: {
    color: '#9e9e9e',
    height: 20
  },

  down: {
    width: 20,
    color: 'gray'
  },

  heading: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'gray'
  },

  hidden: {
    visibility: "hidden"
  },

  icon_button: {
    padding: 10
  },

  menu_item: {
    fontSize: 12
  },

  more_horiz:{
    fontSize: 15,
    // backgroundColor: 'white'
  },

  note_icon: {
    // transform: "rotate(90deg)",
    paddingRight:2,
    paddingLeft:10,
    color: '#9e9e9e',
    height: 20
  },

  root: {
    "& > *": {
      borderBottom: "unset"
    }
  },

  // tooltip: {
  //   size: 60,
  //   backgroundColor: 'limegreen'
  // }

  up: {
    width: 20,
    color: 'gray'
  },

});


function createData(title, created_by, updated, notes) {
  return {
    title,
    created_by,
    updated,
    notes
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
          <TableCell align="left">
            <IconButton className={classes.icon_button}
              aria-label="expand row"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon className={classes.up}/> : <KeyboardArrowDownIcon className={classes.down}/>}
            </IconButton>
            <BookIcon className={classes.book_icon} /> {row.title}
          </TableCell>
        <TableCell align="left">{row.created_by}</TableCell>
        <TableCell align="left">{row.updated}</TableCell>
        <TableCell align="left">
            <NbPanelActionButton />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
        style={{ paddingBottom:0, paddingTop: 0 }}
        colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={0}>
              <Table size="small" aria-label="notes">
                <TableBody>
                  {row.notes.map((noteRow) => (
                    <TableRow key={noteRow.note_title}>
                      <TableCell>
                        <BookIcon className={classes.hidden}/>
                        <BookIcon className={classes.hidden}/>
                        <BookIcon className={classes.hidden}/>
                        <BookIcon className={classes.hidden}/>
                        <DescriptionOutlinedIcon style={{paddingRight:2, paddingLeft:10}} className={classes.note_icon}/>
                        {noteRow.note_title}
                      </TableCell>
                      <TableCell>{noteRow.note_created_by}</TableCell>
                      <TableCell>{noteRow.note_updated}</TableCell>
                      <TableCell>
                          <NbPanelActionButton />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

let notes_array = [
  {
    note_title: "Note One",
    note_created_by: "Bonnie Hardie",
    note_updated: "2020-11-25",
    note_actions: "..."
  },
  {
    note_title: "Note Two",
    note_created_by: "Bonnie Hardie",
    note_updated: "2020-11-25",
    note_actions: "..."
  }
]
const rows = [
  createData("Notebook One", "Bonnie Hardie", "2020-11-25", notes_array),
  createData("Notebook Two", "Bonnie Hardie", "2020-11-25", notes_array),
  createData("Notebook Three", "Bonnie Hardie", "2020-11-25", notes_array),
  createData("Notebook Four", "Bonnie Hardie", "2020-11-25", notes_array),
  createData("Notebook Five", "Bonnie Hardie", "2020-11-25", notes_array)
];

export default function NbPanelTable() {
  const classes = useRowStyles();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.heading} align="left">TITLE</TableCell>
            <TableCell className={classes.heading} align="left">CREATED BY</TableCell>
            <TableCell className={classes.heading} align="left">UPDATED AT</TableCell>
            <TableCell className={classes.heading} align="left">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
