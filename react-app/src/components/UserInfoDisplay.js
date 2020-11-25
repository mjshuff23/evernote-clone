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
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClick}>
                <Avatar />
                <Typography className={classes.username} component="h3">
                    {user.username}
                </Typography>
                {open ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>{user.email}</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}