import { 
    SET_NOTEBOOKS, 
    CREATE_NOTEBOOK, 
    RENAME_NOTEBOOK, 
    DELETE_NOTEBOOK, 
    ADD_NOTE_TO_NOTEBOOK, 
    DELETE_NOTE_FROM_NOTEBOOK 
} from '../actions/notebooks';

const initialState = {
    dict: {},
    ids: []
}

export default function reducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case SET_NOTEBOOKS:
            return action.notebooks;
        case RENAME_NOTEBOOK:
            newState.dict[action.notebook.id] = action.notebook;
            return newState;
        case CREATE_NOTEBOOK:
            newState.dict[action.notebook.id] = action.notebook;
            newState.ids.push(action.notebook.id);
            return newState;
        case DELETE_NOTEBOOK:
            delete newState.dict[action.notebookid];
            newState = newState.ids.filter(id => id != action.notebookid);
            return newState;
        case ADD_NOTE_TO_NOTEBOOK:
            newState.dict[action.notebookid].note_ids.unshift(action.noteid);
            return newState;
        case DELETE_NOTE_FROM_NOTEBOOK:
            newState.dict[action.notebookid].note_ids = newState.dict[action.notebookid].note_ids.filter(id => id != action.noteid);
            return newState;
        default:
            return state;
    }
}

