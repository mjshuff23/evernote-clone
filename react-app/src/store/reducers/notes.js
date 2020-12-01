import { CREATE_NOTE, DELETE_NOTE, SET_NOTES, UPDATE_NOTE, TAG_NOTE, UNTAG_NOTE, TAG_DELETED } from '../actions/notes';

let initialState = {
    dict: {},
    ids: [],
};


export default function reducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case SET_NOTES:
            return action.notes;
        case TAG_NOTE:
            newState.dict[action.noteid].tag_ids.push(action.notetag.id);
            return newState;
        case UNTAG_NOTE:
            newState.dict[action.noteid].tag_ids = newState.dict[action.noteid].tag_ids.filter(tagid => tagid !== action.noteid);
            return newState;
        case TAG_DELETED:
            newState.dict = Object.keys(newState.dict).map(note => {
                note.tag_ids = note.tag_ids.filter(tag => tag !== action.tagid);
                return note;
            });
            return newState;
        case UPDATE_NOTE:
            newState.dict[action.note.id] = action.note;
            return newState;
        case CREATE_NOTE:
            newState.dict[action.note.id] = action.note;
            newState.ids.unshift(action.note.id);
            return newState;
        case DELETE_NOTE:
            delete newState.dict[action.note.id];
            newState.ids = newState.ids.filter(id => id !== action.note.id);
            return newState;
        default:
            return state;
    }
}
