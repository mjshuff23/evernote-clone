import {
    SET_NOTES,
    CREATE_NOTE, 
    UPDATE_NOTE, 
    DELETE_NOTE, 
    ADD_TAG_TO_NOTE, 
    REMOVE_TAG_FROM_NOTE, 
    DELETE_TAG_FROM_NOTES 
} from '../actions/notes';

let initialState = {
    dict: {},
    ids: [],
};

export default function reducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case SET_NOTES:
            return action.notes;
        case CREATE_NOTE:
            newState.dict[action.note.id] = action.note;
            newState.ids.unshift(action.note.id);
            return newState;
        case UPDATE_NOTE:
            newState.dict[action.note.id] = action.note;
            return newState;
        case DELETE_NOTE:
            delete newState.dict[action.note.id];
            newState.ids = newState.ids.filter(id => id !== action.note.id);
            return newState;
        case ADD_TAG_TO_NOTE:
            newState.dict[action.noteid].tag_ids.push(action.notetag.id);
            return newState;
        case REMOVE_TAG_FROM_NOTE:
            newState.dict[action.noteid].tag_ids = newState.dict[action.noteid].tag_ids.filter(tagid => tagid !== action.noteid);
            return newState;
        case DELETE_TAG_FROM_NOTES:
            action.noteids.forEach(noteid => {
                newState.dict[noteid].tag_ids = newState.dict[noteid].tag_ids.filter(tag => tag !== action.tagid);
            })
            return newState;
        default:
            return state;
    }
}
