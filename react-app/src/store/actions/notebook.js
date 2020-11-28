
export const CREATE_NOTEBOOK = 'CREATE_NOTEBOOK';
export const RENAME_NOTEBOOK = 'RENAME_NOTEBOOK';
export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK';

export const createNotebook = (notebook) => ({ type: CREATE_NOTEBOOK, notebook });
export const renameNotebook = (notebook) => ({ type: RENAME_NOTEBOOK, notebook });
export const deleteNotebook = (notebookid) => ({ type: DELETE_NOTEBOOK, notebookid });


export const createNotebookThunk = (title) => async (dispatch) => {

};

export const renameNotebookThunk = (title) => async (dispatch) => {

};

export const deleteNotebookThunk = () => async (dispatch) => {

};
