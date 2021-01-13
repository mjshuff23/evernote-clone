import {
    SET_NOTES,
    CREATE_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
    ADD_TAG_TO_NOTE,
    DELETE_TAG_FROM_NOTES
} from '../actions/notes';

import { DELETE_NOTEBOOK } from '../actions/notebooks';

import { DISASSOCIATE_TAG } from '../actions/tags';

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
            delete newState.dict[action.noteId];
            newState.ids = newState.ids.filter(id => id !== Number(action.noteId));
            return newState;
        case ADD_TAG_TO_NOTE:
            newState.dict[action.noteid].tag_ids = newState.dict[action.noteid].tag_ids.filter(id => id !== action.notetag);
            newState.dict[action.noteid].tag_ids.push(action.notetag);
            return newState;
        case DISASSOCIATE_TAG:
            newState.dict[action.noteTag.note_id].tag_ids = newState.dict[action.noteTag.note_id].tag_ids.filter(tagid => tagid !== Number(action.noteTag.tag_id));
            return newState;
        case DELETE_TAG_FROM_NOTES:
            action.noteids.forEach(noteid => {
                newState.dict[noteid].tag_ids = newState.dict[noteid].tag_ids.filter(tag => tag !== Number(action.tagid));
            })
            return newState;
        case DELETE_NOTEBOOK:
            action.notebook.note_ids.forEach(id => {
                delete newState.dict[id];
                newState.ids = newState.ids.filter(noteId => noteId !== Number(id));
            });
            return newState;
        default:
            return state;
    }
}
