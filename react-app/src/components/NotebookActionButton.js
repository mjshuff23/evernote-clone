import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import RenameNotebookDialog from './RenameNotebookDialog';
import DeleteNotebookDialog from './DeleteNotebookDialog';


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

  more_horiz: {
    fontSize: 15,
  },

  note_icon: {
    paddingRight: 2,
    paddingLeft: 10,
    color: '#9e9e9e',
    height: 20
  },

  root: {
    "& > *": {
      borderBottom: "unset"
    }
  },
  up: {
    width: 20,
    color: 'gray'
  },

});


export default function NotebookActionButton({ notebookId }) {
  const [openRename, setOpenRename] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useRowStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenRename = () => {
    setOpenRename(true);
    setAnchorEl(null);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
    setAnchorEl(null);
  };


  return (
    <>
      <Tooltip className={classes.tooltip} title="More actions" placement="top" arrow>
        <MoreHorizIcon 
          className={classes.more_horiz} 
          aria-controls="simple-menu" 
          aria-haspopup="true" 
          onClick={handleClick}
        />
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem 
          className={classes.menu_item} 
          onClick={handleClickOpenRename}>
          Rename Notebook
        </MenuItem>
        <MenuItem 
          className={classes.menu_item} 
          onClick={handleClickOpenDelete}>
          Delete Notebook
        </MenuItem>
      </Menu>
      <RenameNotebookDialog open={openRename} setOpen={setOpenRename} notebookId={notebookId}/>
      <DeleteNotebookDialog open={openDelete} setOpen={setOpenDelete} notebookId={notebookId}/>
    </>
  )
}
