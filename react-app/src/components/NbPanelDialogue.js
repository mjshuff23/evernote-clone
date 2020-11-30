import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { CreateNewNotebookThunk }

const useStyles = makeStyles((theme) => ({

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

}));

export default function NbPanelDialogue() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleSubmit = () => {
        setOpen(false);

    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleClickOpen} onHover={classes.hover} className={classes.nb_panel_button}>
                <CreateNewFolderIcon className={classes.nb_panel_create_new_icon}/>
                New Notebook
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create new notebook</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Notebooks are useful for grouping notes around a common topic. You can always edit your notebook's name later!
                </DialogContentText>
                <TextField
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
                <Button onClick={handleClose}>
                    SAVE
                </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
