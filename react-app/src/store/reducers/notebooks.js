import { CREATE_NOTEBOOK, RENAME_NOTEBOOK, DELETE_NOTEBOOK } from '../actions/notebook';

const initialState = {
    dict: {},
    ids: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RENAME_NOTEBOOK:
        case CREATE_NOTEBOOK:
            const newState = { ...state }
            newState[action.notebook.id] = action.notebook
            newState.ids.push(action.notebook.id);
            return newState;
        case DELETE_NOTEBOOK:
            const newState = { ...state };
            delete newState[action.notebookid];
            newState = newState.ids.filter(id => id != action.notebookid);
            return newState;
        default:
            return state;
    }
}
