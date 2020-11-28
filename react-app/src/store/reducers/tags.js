import { CREATE_TAG, DELETE_TAG, SET_TAGS } from '../actions/tags';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_TAGS:
            return action.tags;
        case CREATE_TAG:
            let newState = { ...state };
            newState.dict[ action.tag.id ] = action.tag;
            newState.ids.push(action.tag.id);
            return newState;
        case DELETE_TAG:
            let newState = { ...state };
            delete newState.dict[ action.tagid ];
            newState = newState.ids.filter(id => id !== action.tagid);
            return newState;
        default:
            return state;
    }
}
