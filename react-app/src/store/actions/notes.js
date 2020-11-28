import { baseUrl } from "../../config";

export const SET_NOTES = 'notes/SET_NOTES';
export const CREATE_NOTE = 'notes/CREATE_NOTE';
export const UPDATE_NOTE = 'notes/UPDATE_NOTE';
export const DELETE_NOTE = 'notes/DELETE_NOTE';


export const setNotes = (notes) => ({ type: SET_NOTES, notes });
export const createNoteAction = (note) => ({ type: CREATE_NOTE, note });
export const updateNoteAction = (note) => ({ type: UPDATE_NOTE, note });
export const deleteNoteAction = (noteId) => ({ type: DELETE_NOTE, noteId });

export const createNote = (userId, notebookId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/notebooks/${notebookId}/notes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const note = await response.json();
        dispatch(createNoteAction(note));
        return note;
    }
};

export const updateNote = (userId, notebookId, note) => async (dispatch) => {
    // Destructure these from passed note object
    const { title, content, noteId } = note;
    const response = await fetch(`/api/users/${userId}/notebooks/${notebookId}/notes/${noteId}/`, {
        method: 'PUT',
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        const note = await response.json();
        dispatch(updateNoteAction(note));
    }
};

export const deleteNote = (userId, notebookId, noteId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/notebooks/${notebookId}/notes/${noteId}/`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedNote = await response.json();
        dispatch(deleteNoteAction(deletedNote.id));
    }
};
