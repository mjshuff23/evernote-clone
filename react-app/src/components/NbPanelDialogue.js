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
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { createNotebookThunk } from '../store/actions/notebooks';

const useStyles = makeStyles((theme) => ({
    dialog_content_text: {
        fontSize: 'small'
    },

    nb_panel_button: {
        textTransform: 'none',
        fontWeight: 'normal',
        paddingRight: 50,
        color: 'green',
            '&:hover': {
                color: "#66bb6a",
                backgroundColor: "white",
                '& $nb_folder_icon': {
                    color: "#66bb6a",
                }
            },
    },

}));

export default function NbPanelDialogue() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [title, setTitle] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleHover = () => {

    }
    const handleSubmit = () => {
        setOpen(false);
        dispatch(createNotebookThunk(user.id, title))
    }
    const handleClose = () => {
        setOpen(false);
    };
    const update_title = (e) => {
        setTitle(e.target.value)
    }

    return (
        <>
                <Button onClick={handleClickOpen} className={classes.nb_panel_button}>
                    <CreateNewFolderIcon className={classes.nb_folder_icon}/>
                    New Notebook
                </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create new notebook</DialogTitle>
                <DialogContent>
                <DialogContentText className={classes.dialog_content_text}>
                    Notebooks are useful for grouping notes around a common topic. You can always edit your notebook's name later!
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
        </>
    );
}
