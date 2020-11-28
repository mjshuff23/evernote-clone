import { CREATE_TAG, DELETE_TAG, SET_TAGS } from '../actions/tags';

const initialState = {
    dict: {},
    ids: []
}

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_TAGS:
            return action.tags;
        case CREATE_TAG:
            newState.dict[ action.tag.id ] = action.tag;
            newState.ids.push(action.tag.id);
            return newState;
        case DELETE_TAG:
            delete newState.dict[ action.tagid ];
            newState = newState.ids.filter(id => id !== action.tagid);
            return newState;
        default:
            return state;
    }
}
