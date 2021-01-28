import React from "react";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from '../../styles/notebookpanel/NbPanelActionButtonStyles';


export default function NbPanelActionButton() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <>
      <Tooltip className={classes.tooltip} title="More actions" placement="top" arrow>
        <MoreHorizIcon className={classes.more_horiz} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        </MoreHorizIcon>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menu_item} onClick={handleClose}>Move</MenuItem>
        <MenuItem className={classes.menu_item} onClick={handleClose}>Copy to...</MenuItem>
        <MenuItem className={classes.menu_item} onClick={handleClose}>Duplicate...</MenuItem>
        <MenuItem className={classes.menu_item} onClick={handleClose}>Edit tags</MenuItem>
        <MenuItem className={classes.menu_item} onClick={handleClose}>Note info</MenuItem>
        <MenuItem className={classes.menu_item} onClick={handleClose}>Move to trash</MenuItem>
      </Menu>
    </>
  )
}
