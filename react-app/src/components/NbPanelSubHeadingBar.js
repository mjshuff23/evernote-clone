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
  button: {
    color: '#43a047',
    textTransform: 'none',
    fontWeight: 'normal',
    paddingRight: 50,
  },
  create_new_icon: {
    color: '#43a047',
    padding: 8
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
          <Button onHover={classes.hover} className={classes.button}>
            <CreateNewFolderIcon onHover={classes.hover} className={classes.create_new_icon}/>
            New Notebook
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
