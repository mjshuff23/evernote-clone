export const SET_NOTEBOOKS = 'notebooks/SET_NOTEBOOKS';
export const CREATE_NOTEBOOK = 'notebooks/CREATE_NOTEBOOKS';
export const RENAME_NOTEBOOK = 'notebooks/RENAME_NOTEBOOKS';
export const DELETE_NOTEBOOK = 'notebooks/DELETE_NOTEBOOKS';
export const ADD_NOTE_TO_NOTEBOOK = 'notebooks/ADD_NOTE_TO_NOTEBOOK';
export const DELETE_NOTE_FROM_NOTEBOOK = 'notebooks/DELETE_NOTE_FROM_NOTEBOOK';


export const setNotebooks = (notebooks) => ({
    type: SET_NOTEBOOKS,
    notebooks
});
export const createNotebook = (notebook) => ({
    type: CREATE_NOTEBOOK,
    notebook
});
export const renameNotebook = (notebook) => ({
    type: RENAME_NOTEBOOK,
    notebook
});
export const deleteNotebook = (notebookid) => ({
    type: DELETE_NOTEBOOK,
    notebookid
});
export const addNoteToNotebook = (notebookid, noteid) => ({
    type: ADD_NOTE_TO_NOTEBOOK,
    notebookid,
    noteid
});
export const deleteNoteFromNotebook = (notebookid, noteid) => ({
    type: DELETE_NOTE_FROM_NOTEBOOK,
    notebookid,
    noteid
});


export const createNotebookThunk = (userid, title) => async (dispatch) => {
    let newNotebook = await fetch(`/api/users/${userid}/notebooks/`, {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({title})
    });
    if (newNotebook.ok) {
        newNotebook = await newNotebook.json();
        dispatch(createNotebook(newNotebook));
    }
};

export const renameNotebookThunk = (userid, notebookid, title) => async (dispatch) => {
    let renamed = await fetch(`api/users/${userid}/notebooks/${notebookid}`, {
        method: 'PUT',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({title})
    });
    if (renamed.ok) {
        renamed = await renamed.json();
        dispatch(renameNotebook(renamed.title))
    }
};


export const deleteNotebookThunk = (userid, notebookid) => async (dispatch) => {
    let deleted = await fetch(`api/users/${userid}/notebooks/${notebookid}`, {
        method: 'DELETE'
    });
    if (deleted.ok) {
        deleted = await deleted.json();
        dispatch(deleteNotebook(deleted.id)) 
        // TODO: have this just refresh the state
    }
};
