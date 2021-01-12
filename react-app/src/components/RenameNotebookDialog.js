import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { renameNotebookThunk } from '../store/actions/notebooks';

const useStyles = makeStyles((theme) => ({
  dialog_content_text: {
    fontSize: 'small'
  },
}));

export default function RenameNotebookDialog({open, setOpen, notebookId}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    setOpen(false);
    dispatch(renameNotebookThunk(user.id, notebookId, title));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const update_title = (e) => {
    setTitle(e.target.value)
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Rename Notebook</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialog_content_text}>
          Give your notebook a new title.
        </DialogContentText>
        <TextField
          onChange={update_title}
          autoFocus
          margin="dense"
          id="name"
          label="Notebook name"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          CANCEL
        </Button>
        <Button onClick={handleSubmit}>
          SAVE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
