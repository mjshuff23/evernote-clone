export const TOGGLE_TAG_PANEL = 'TOGGLE_TAG_PANEL';
export const TOGGLE_LOGOUT_PANEL = 'TOGGLE_LOGOUT_PANEL';
export const SET_CURRENT_NOTEBOOK = 'SET_CURRENT_NOTEBOOK';
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';
export const SET_CURRENT_TAG = 'SET_CURRENT_TAG';

export const toggleTagPanel = () => ({ type: TOGGLE_TAG_PANEL });
export const toggleLogoutPanel = () => ({ type: TOGGLE_LOGOUT_PANEL });
export const setCurrentNotebook = notebookid => ({ type: SET_CURRENT_NOTEBOOK });
export const setCurrentNote = noteid => ({ type: SET_CURRENT_NOTE });
export const setCurrentTag = tagid => ({ type: SET_CURRENT_TAG });

export const toggleTagPanelThunk = () => dispatch => dispatch(toggleTagPanel());
export const toggleLogoutPanelThunk = () => dispatch => dispatch(toggleLogoutPanel());
export const setCurrentNotebookThunk = notebookid => dispatch => dispatch(setCurrentNotebook(notebookid));
export const setCurrentNoteThunk = noteid => dispatch => dispatch(setCurrentNote(noteid));
export const setCurrentTagThunk = tagid => dispatch => dispatch(setCurrentTag(tagid));
