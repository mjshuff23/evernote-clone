import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: 'white',
    color: 'black',
    height: 50,
    boxShadow: 'none'
  },
  nb_panel_button: {
    color: 'green',
    textTransform: 'none',
    fontWeight: 'normal',
    paddingRight: 50,
  },
  nb_panel_create_new_icon: {
    color: '#43a047',
    padding: 8,
    // backgroundColor:'red'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NbPanelSubHeadingBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography className={classes.title}>
            My notebook list
          </Typography>
          <Button onHover={classes.hover} className={classes.nb_panel_button}>
          {/* <div className={classes.nb_panel_button}> */}
            <CreateNewFolderIcon onHover={classes.hover} className={classes.nb_panel_create_new_icon}/>
            New Notebook
          {/* </div> */}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
