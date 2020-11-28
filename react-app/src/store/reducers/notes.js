import { SET_NOTES, TAG_NOTE, UNTAG_NOTE } from '../actions/notes';

let initialState = {
    dict: {},
    ids: []
}

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_NOTES:
            return action.notes;
        case TAG_NOTE:
            newState.dict[ action.noteid ].tag_ids.push(action.notetag.id);
            return newState;
        case UNTAG_NOTE:
            newState.dict[ action.noteid ].tag_ids.filter(tagid => tagid !== action.noteid);
            return newState;
        default:
            return state;
    }
}
