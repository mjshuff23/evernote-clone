import { CREATE_NOTE, DELETE_NOTE, SET_NOTES, UPDATE_NOTE, TAG_NOTE, UNTAG_NOTE } from '../actions/notes';

let initialState = {
    dict: {},
    ids: [],
};


export default function reducer(state = {}, action) {
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
        case UPDATE_NOTE:
        case CREATE_NOTE:
            newState.dict[action.note.id] = action.note;
            newState.ids.push(action.note.id);
            return newState;
        case DELETE_NOTE:
            delete newState.dict[action.note.id];
            newState = newState.ids.filter(id => id != action.note.id);
    }
}
