import {
    SET_TAGS,
    CREATE_TAG,
    DELETE_TAG,
    DISASSOCIATE_TAG,
    ADD_NOTE_TO_TAG,
    REMOVE_NOTE_FROM_TAG,
    DELETE_NOTE_FROM_TAGS,
} from '../actions/tags';

import { DELETE_NOTEBOOK } from '../actions/notebooks';

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
            newState.ids = newState.ids.filter(id => id !== action.tag.id)
            newState.ids.unshift(action.tag.id);
            return newState;
        case DELETE_TAG:
            delete newState.dict[action.tagid];
            newState.ids = newState.ids.filter(id => id !== action.tagid);
            return newState;
        case ADD_NOTE_TO_TAG:
            newState.dict[action.tagid].note_ids = newState.dict[action.tagid].note_ids.filter(id => id !== action.noteid);
            newState.dict[action.tagid].note_ids.unshift(action.noteid);
            return newState;
        case DISASSOCIATE_TAG:
            newState.dict[action.noteTag.tag_id].note_ids = newState.dict[action.noteTag.tag_id].note_ids.filter(id => id !== Number(action.noteTag.note_id));
            return newState;
        case DELETE_NOTE_FROM_TAGS:
            action.tagids.forEach(tagid => {
                newState.dict[tagid].note_ids = newState.dict[tagid].note_ids.filter(note => note !== Number(action.noteid));
            })
            return newState;
        case DELETE_NOTEBOOK:
            newState.ids.forEach(tagid => {
              newState.dict[tagid].note_ids = newState.dict[tagid].note_ids.filter(note => !action.notebook.note_ids.includes(note));
            })
            return newState;
        default:
            return state;
    }
}
