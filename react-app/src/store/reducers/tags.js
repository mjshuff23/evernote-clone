import {
    SET_TAGS,
    CREATE_TAG,
    DELETE_TAG,
    ADD_NOTE_TO_TAG,
    REMOVE_NOTE_FROM_TAG,
    DELETE_NOTE_FROM_TAGS,
} from '../actions/tags';

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
            newState.dict[action.tag.id] = action.tag;
            newState.ids.unshift(action.tag.id);
            return newState;
        case DELETE_TAG:
            delete newState.dict[action.tagid];
            newState.ids = newState.ids.filter(id => id !== action.tagid);
            return newState;
        case ADD_NOTE_TO_TAG:
            newState.dict[action.tagid].note_ids.unshift(action.noteid);
            return newState;
        case REMOVE_NOTE_FROM_TAG:
            newState.dict[action.tagid].note_ids = newState.dict[action.tagid].note_ids.filter(id => id !== action.noteid);
            return newState;
        case DELETE_NOTE_FROM_TAGS:
            action.tagids.forEach(tagid => {
                newState.dict[tagid].note_ids = newState.dict[tagid].note_ids.filter(note => note !== action.noteid);
            })
            return newState;
        default:
            return state;
    }
}
