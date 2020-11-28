import { CREATE_TAG, DELETE_TAG, TAG_NOTE, UNTAG_NOTE } from '../actions/tags';

const initialState = {
    dict: {},
    ids: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TAG:
            let newState = { ...state };
            newState[ action.tag.id ] = action.tag;
            newState.ids.push(action.tag.id);
            return newState;
        case DELETE_TAG:
            let newState = { ...state };
            delete newState[ action.tagid ];
            newState = newState.ids.filter(id => id != action.tagid);
            return newState;
        case TAG_NOTE:
        case UNTAG_NOTE:
        default:
            return state;
    }
}
