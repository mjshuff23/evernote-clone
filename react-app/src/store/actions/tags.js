export const SET_TAGS = 'SET_TAGS';
export const CREATE_TAG = 'CREATE_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const DISASSOCIATE_TAG = 'tags/DISASSOCIATE_TAG';
export const ADD_NOTE_TO_TAG = 'ADD_NOTE_TO_TAG';
export const DELETE_NOTE_FROM_TAGS = 'DELETE_NOTE_FROM_TAGS';

export const setTags = tags => ({ type: SET_TAGS, tags });
export const createTag = tag => ({ type: CREATE_TAG, tag });
export const deleteTag = tagid => ({ type: DELETE_TAG, tagid });
export const disassociateTag = (noteTag) => ({ type: DISASSOCIATE_TAG, noteTag });
export const addNoteToTag = (noteid, tagid) => ({ type: ADD_NOTE_TO_TAG, noteid, tagid });
export const deleteNoteFromTags = (noteid, tagids) => ({ type: DELETE_NOTE_FROM_TAGS, noteid, tagids });

export const createTagThunk = (userid, name) => async dispatch => {
    userid = Number(userid);
    let newTag = await fetch(`/api/users/${userid}/tags/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    });
    if (newTag.ok) {
        newTag = await newTag.json();
        await dispatch(createTag(newTag));
        return newTag.id;
    }
}

export const deleteTagThunk = (userid, tagid) => async dispatch => {
    userid = Number(userid);
    tagid = Number(tagid);
    const res = await fetch(`/api/users/${userid}/tags/${tagid}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const deleted = await res.json();
        dispatch(deleteTag(deleted.id));
    }
}

export const disassociateTagThunk = (noteid, tagid) => async dispatch => {
  noteid = Number(noteid);
  tagid = Number(tagid);
  let response = await fetch(`/api/notes/${noteid}/tags/${tagid}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    const removedNoteTag = await response.json();
    dispatch(disassociateTag(removedNoteTag));
  }
};