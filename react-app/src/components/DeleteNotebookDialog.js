import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteNotebookThunk } from '../store/actions/notebooks';

const useStyles = makeStyles((theme) => ({
  dialog_content_text: {
    fontSize: 'small'
  },
}));

export default function RenameNotebookDialog({ open, setOpen, notebookId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  const handleSubmit = () => {
    setOpen(false);
    dispatch(deleteNotebookThunk(user.id, notebookId));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Delete Notebook</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialog_content_text}>
          Confirm that you would like ot delete this notebook and all of its notes.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          CANCEL
        </Button>
        <Button onClick={handleSubmit}>
          DELETE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
