import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "white",
    color: "black",
    height: 50,
    border: "none",
    boxShadow: "none"
  },
  input_root: {
    color: "inherit",
    fontSize: "small"
  },
  input_input: {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width")
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search_area: {
    position: "relative",
    paddingBottom: 15,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  search_icon: {
    padding: theme.spacing(0.5, 2),
    height: 20,
    position: "absolute",
    pointerEvents: "none"
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontSize: 20,
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    paddingBottom: 15
  },
}));

export default function NbPanelHeadingBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography className={classes.title} noWrap>
            Notebooks
          </Typography>
          <div className={classes.search_area}>
            <SearchIcon className={classes.search_icon} />
            <InputBase
              placeholder="Find Notebooks…"
              classes={{
                root: classes.input_root,
                input: classes.input_input
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
