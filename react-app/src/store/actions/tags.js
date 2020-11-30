export const SET_TAGS = 'SET_TAGS';
export const CREATE_TAG = 'CREATE_TAG';
export const DELETE_TAG = 'DELETE_TAG';

export const setTags = tags => ({ type: SET_TAGS, tags });
export const createTag = tag => ({ type: CREATE_TAG, tag });
export const deleteTag = tagid => ({ type: DELETE_TAG, tagid });

export const createTagThunk = (userid, name) => async dispatch => {
    const newTag = await fetch(`/api/users/${userid}/tags/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    });
    if (newTag.ok) {
        let data = await newTag.json();
        dispatch(createTag(data));
    }
}

export const deleteTagThunk = (userid, tagid) => async dispatch => {
    const deleted = await fetch(`/api/users/${userid}/tags/${tagid}`, {
        method: 'DELETE'
    });
    if (deleted.ok) {
        deleted = await deleted.json();
        dispatch(deleteTag(deleted.id));
    }
}
