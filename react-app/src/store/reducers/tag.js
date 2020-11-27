import { CREATE_TAG, DELETE_TAG, TAG_NOTE, UNTAG_NOTE } from '../actions/tag';

const initialState = {
    dict: {},
    ids: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TAG:

        case DELETE_TAG:

        case TAG_NOTE:
        case UNTAG_NOTE:
            return state; // change this once the add tag to note route is done
        default:
            return state;
    }
}
