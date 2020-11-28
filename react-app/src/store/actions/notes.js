export const SET_NOTES = 'notes/SET_NOTES';
export const TAG_NOTE = 'notes/TAG_NOTE';
export const UNTAG_NOTE = 'notes/UNTAG_NOTE';

export const setNotes = (notes) => ({ type: SET_NOTES, notes });
export const tagNote = (notetag, noteid) => ({ type: TAG_NOTE, notetag, noteid });
export const untagNote = (notetagid, noteid) => ({ type: UNTAG_NOTE, notetagid, noteid });

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
}

export const untagNoteThunk = (noteid, notetagid) => async dispatch => {
    let removedTagId = await fetch(`/api/notes/${noteid}/tags/${notetagid}`, {
        method: 'DELETE'
    });
    if (removedTagId.ok) {
        removedTagId = removedTagId.json();
        dispatch(untagNote(removedTagId.id, noteid));
    }
}
