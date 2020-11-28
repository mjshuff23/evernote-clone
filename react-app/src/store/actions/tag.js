export const CREATE_TAG = 'CREATE_TAG';
export const DELETE_TAG = 'DELETE_TAG';
<<<<<<< HEAD
export const TAG_NOTE = 'TAG_NOTE';
export const UNTAG_NOTE = 'UNTAG_NOTE';

export const createTag = tag => ({ type: CREATE_TAG, tag });
export const deleteTag = tagid => ({ type: DELETE_TAG, tagid });
export const tagNote = () => ({ type: TAG_NOTE }); // might go into the notes slice of state
export const untagNote = notetagid => ({ type: UNTAG_NOTE, notetagid }); // might go into the notes slice of state

export const createTagThunk = name => async dispatch => {
    const newTag = await fetch(`/api/users/${userid}/tags/`, {
        method: 'POST',
        body: name
    });
    if (newTag.ok) {
        newTag = await newTag.json();
        dispatch(createTag(newTag));
    }
}

export const deleteTagThunk = tagid => async dispatch => {
    const deleted = await fetch(`/api/users/${userid}/tags/${tagid}`, {
        method: 'DELETE'
    });
    if (deleted.ok) {
        deleted = await deleted.json();
        dispatch(deleteTag(deleted.id));
    }
}

export const tagNoteThunk = () => async dispatch => {
    // add the tag to the note
}

export const untagNoteThunk = notetagid => async dispatch => {
    // remove the tag from the note
=======
export const TAG_NOTE = 'TAG_NOTE'; // create route for this
export const UNTAG_NOTE = 'UNTAG_NOTE'; // create route for this

export const createTag = tag => ({ type: CREATE_TAG, tag });
export const deleteTag = tagid => ({ type: DELETE_TAG, tagid });
export const tagNote = () => ({ type: TAG_NOTE });

export const createTagThunk = name => async dispatch => {

}

export const deleteTagThunk = () => async dispatch => {

}

export const tagNoteThunk = () => async dispatch => {

}

export const untagNoteThunk = () => async dispatch => {
    
>>>>>>> trying to resolve conflicts without messing anything up
}
