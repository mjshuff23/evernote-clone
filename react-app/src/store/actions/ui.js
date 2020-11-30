export const TOGGLE_TAGS_PANEL = 'TOGGLE_TAGS_PANEL';
export const TOGGLE_LOGOUT_PANEL = 'TOGGLE_LOGOUT_PANEL';
export const SET_CURRENT_NOTEBOOK = 'SET_CURRENT_NOTEBOOK';
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';
export const SET_CURRENT_TAG = 'SET_CURRENT_TAG';

export const toggleTagPanel = () => ({ type: TOGGLE_TAGS_PANEL });
export const toggleLogoutPanel = () => ({ type: TOGGLE_LOGOUT_PANEL });
export const setCurrentNotebook = notebookid => ({ type: SET_CURRENT_NOTEBOOK });
export const setCurrentNote = noteid => ({ type: SET_CURRENT_NOTE });
export const setCurrentTag = tagid => ({ type: SET_CURRENT_TAG });
