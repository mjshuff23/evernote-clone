import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, MenuItem, Typography, Button, Avatar } from '@material-ui/core';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import useStyles from './styles/UserInfoDisplayStyles';
import { logoutThunk } from '../store/actions/user';


export default function UserInfoDisplay() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  let open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={classes.userInfoPanel}>
      <Button variant="contained" color="primary" onClick={handleClick} className={classes.userInfoButton}>
        <Avatar className={classes.userInfoAvatar} />
        <Typography className={classes.username} component="h3">
          {user.username}
        </Typography>
        {open ? <ExpandLess className={classes.hide} /> : <ExpandMore className={classes.hide} />}
      </Button>
      <Menu
        id="simple-menu"
        className="userMenu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 0, left: 200 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>{user.email}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
