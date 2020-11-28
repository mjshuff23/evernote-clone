export const SET_NOTEBOOKS = 'notebooks/SET_NOTEBOOKS';
export const CREATE_NOTEBOOK = 'notebooks/CREATE_NOTEBOOKS';
export const RENAME_NOTEBOOK = 'notebooks/RENAME_NOTEBOOKS';
export const DELETE_NOTEBOOK = 'notebooks/DELETE_NOTEBOOKS';


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


export const createNotebookThunk = (title) => async (dispatch) => {
    const newNotebook = await fetch(`/api/users/${userid}/notebooks/`, {
        method: 'POST',
        body: JSON.stringify(title)
    });
    if (newNotebook.ok) {
        newNotebook = await newNotebook.json();
        dispatch(createNotebook(newNotebook));
    }
};

export const renameNotebookThunk = (title) => async (dispatch) => {
    const renamed = await fetch(`api/users/${userid}/notebooks/${notebookid}`, {
        method: 'PUT',
        body: JSON.stringify(title)
    });
    if (renamed.ok) {
        renamed = await renamed.json();
        dispatch(renameNotebook(renamed.title))
    }
};


export const deleteNotebookThunk = () => async (dispatch) => {
    const deleted = await fetch(`api/users/${userid}/notebooks/${notebookid}`, {
        method: 'DELETE'
    });
    if (deleted.ok) {
        deleted = await deleted.json();
        dispatch(deleteNotebook(deleted.id))
    }
};
