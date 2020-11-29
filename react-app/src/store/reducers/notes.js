import { CREATE_NOTE, DELETE_NOTE, SET_NOTES, UPDATE_NOTE } from '../actions/notes';

const initialState = {
    dict: {},
    ids: [],
};


export default function reducer(state = {}, action) {
    let newState = { ...state };

    switch (action.type) {
        case SET_NOTES:
            return action.notes;
        case UPDATE_NOTE:
        case CREATE_NOTE:
            newState.dict[action.note.id] = action.note;
            newState.ids.push(action.note.id);
            return newState;
        case DELETE_NOTE:
            delete newState.dict[action.note.id];
            newState = newState.ids.filter(id => id != action.note.id);
            return newState;
        default:
            return state;
    }
}
