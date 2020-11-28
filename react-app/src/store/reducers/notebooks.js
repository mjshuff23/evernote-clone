import { CREATE_NOTEBOOK, RENAME_NOTEBOOK, DELETE_NOTEBOOK } from '../actions/notebook';

const initialState = {
    dict: {},
    ids: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_NOTEBOOK:
            return action.user;
        case RENAME_NOTEBOOK:
            return null;
        case DELETE_NOTEBOOK:
            return null;
        default:
            return state;
    }
}
