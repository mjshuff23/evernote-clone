import { baseUrl } from "../../config";

export const SET_NOTES = 'notes/SET_NOTES';
export const CREATE_NOTE = 'notes/CREATE_NOTE';
export const UPDATE_NOTE = 'notes/UPDATE_NOTE';
export const DELETE_NOTE = 'notes/DELETE_NOTE';
export const TAG_NOTE = 'notes/TAG_NOTE';
export const UNTAG_NOTE = 'notes/UNTAG_NOTE';
export const TAG_DELETED = 'noes/TAG_DELETED';

export const setNotes = (notes) => ({ type: SET_NOTES, notes });
export const tagNote = (notetag, noteid) => ({ type: TAG_NOTE, notetag, noteid });
export const untagNote = (notetagid, noteid) => ({ type: UNTAG_NOTE, notetagid, noteid });
export const createNoteAction = (note) => ({ type: CREATE_NOTE, note });
export const updateNoteAction = (note) => ({ type: UPDATE_NOTE, note });
export const deleteNoteAction = (noteId) => ({ type: DELETE_NOTE, noteId });
export const tagDeleted = (tagid) => ({ type: TAG_DELETED, tagid });

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

export const tagNoteThunk = (noteid, tagid) => async dispatch => {
    let newNoteTag = await fetch(`/api/notes/${noteid}/tags/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tagid })
    });
    if (newNoteTag.ok) {
        newNoteTag = await newNoteTag.json();
        dispatch(tagNote(newNoteTag, noteid));
    }
};

export const untagNoteThunk = (noteid, notetagid) => async dispatch => {
    let removedTagId = await fetch(`/api/notes/${noteid}/tags/${notetagid}`, {
        method: 'DELETE'
    });
    if (removedTagId.ok) {
        removedTagId = removedTagId.json();
        dispatch(untagNote(removedTagId.id, noteid));
    }
};

export const tagDeletedThunk = (tagid) => dispatch => {
    dispatch(tagDeleted(tagid));
};
