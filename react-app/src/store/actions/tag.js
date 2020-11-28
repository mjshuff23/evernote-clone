export const CREATE_TAG = 'CREATE_TAG';
export const DELETE_TAG = 'DELETE_TAG';
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
    
}
