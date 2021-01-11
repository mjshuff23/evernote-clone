import { addNoteToNotebook, deleteNoteFromNotebook } from './notebooks';
import { addNoteToTag, removeNoteFromTag, deleteNoteFromTags } from './tags';

export const SET_NOTES = 'notes/SET_NOTES';
export const CREATE_NOTE = 'notes/CREATE_NOTE';
export const UPDATE_NOTE = 'notes/UPDATE_NOTE';
export const DELETE_NOTE = 'notes/DELETE_NOTE';
export const ADD_TAG_TO_NOTE = 'notes/ADD_TAG_TO_NOTE';
export const REMOVE_TAG_FROM_NOTE = 'notes/REMOVE_TAG_FROM_NOTE';
export const DELETE_TAG_FROM_NOTES = 'notes/DELETE_TAG_FROM_NOTES';

export const setNotes = (notes) => ({ type: SET_NOTES, notes });
export const addTagToNote = (notetag, noteid) => ({ type: ADD_TAG_TO_NOTE, notetag, noteid });
export const removeTagFromNote = (notetagid, noteid) => ({ type: REMOVE_TAG_FROM_NOTE, notetagid, noteid });
export const createNoteAction = (note) => ({ type: CREATE_NOTE, note });
export const updateNoteAction = (note) => ({ type: UPDATE_NOTE, note });
export const deleteNoteAction = (noteId) => ({ type: DELETE_NOTE, noteId });
export const deleteTagFromNotes = (tagid, noteids) => ({ type: DELETE_TAG_FROM_NOTES, tagid, noteids });

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
        dispatch(addNoteToNotebook(note.notebook_id, note.id));
        return note;
    }
};

export const updateNote = (userId, notebookId, noteId, content, title) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/notebooks/${notebookId}/notes/${noteId}/`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        const note = await response.json();
        dispatch(updateNoteAction(note));
    }
};

export const deleteNote = (userId, notebookId, noteId, tagIds) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/notebooks/${notebookId}/notes/${noteId}/`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedNote = await response.json();
        dispatch(deleteNoteAction(deletedNote.id));
        dispatch(deleteNoteFromNotebook(notebookId, noteId));
        if (tagIds) dispatch(deleteNoteFromTags(noteId, tagIds));
    }
};

export const addTagToNoteThunk = (noteid, tagid) => async dispatch => {
    noteid = Number(noteid);
    tagid = Number(tagid);
    // /api/notes/<int:noteid>/tags
    let newNoteTag = await fetch(`/api/notes/${noteid}/tags`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tagid })
    });
    if (newNoteTag.ok) {
        newNoteTag = await newNoteTag.json();
        // console.log(newNoteTag);
        dispatch(addTagToNote(newNoteTag.tag_id, newNoteTag.note_id));
        dispatch(addNoteToTag(newNoteTag.note_id, newNoteTag.tag_id))
    }
};

export const removeTagFromNoteThunk = (noteid, tagid) => async dispatch => {
    noteid = Number(noteid);
    tagid = Number(tagid);
    let removedTagId = await fetch(`/api/notes/${noteid}/tags/${tagid}`, {
        method: 'DELETE'
    });
    if (removedTagId.ok) {
        removedTagId = await removedTagId.json();
        dispatch(removeTagFromNote(removedTagId.id, noteid));
        dispatch(removeNoteFromTag(noteid, tagid));
    }
};
