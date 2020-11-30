import {
    TOGGLE_TAG_PANEL,
    TOGGLE_LOGOUT_PANEL,
    SET_CURRENT_NOTE,
    SET_CURRENT_NOTEBOOK,
    SET_CURRENT_TAG
} from '../actions/ui';

let initialState = {
    display_tag_panel: false,
    display_logout_panel: false,
    current_note: null,
    current_notebook: null,
    current_tag: null
}

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case TOGGLE_TAG_PANEL:
            newState.display_tag_panel = !newState.display_tag_panel;
            return newState;
        case TOGGLE_LOGOUT_PANEL:
            newState.display_logout_panel = !newState.display_logout_panel;
            return newState;
        case SET_CURRENT_NOTE:
            newState.current_note = action.noteid;
            return newState;
        case SET_CURRENT_NOTEBOOK:
            newState.current_notebook = action.notebookid;
            return newState;
        case SET_CURRENT_TAG:
            newState.current_tag = action.tagid;
            return newState;
        default:
            return state;
    }
}
