export const TOGGLE_TAG_PANEL = 'TOGGLE_TAG_PANEL';
export const SET_CURRENT_NOTEBOOK = 'SET_CURRENT_NOTEBOOK';
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE';
export const SET_CURRENT_TAG = 'SET_CURRENT_TAG';

export const toggleTagPanel = () => ({ type: TOGGLE_TAG_PANEL });
export const setCurrentNotebook = notebookid => ({ type: SET_CURRENT_NOTEBOOK, notebookid });
export const setCurrentNote = noteid => ({ type: SET_CURRENT_NOTE, noteid });
export const setCurrentTag = tagid => ({ type: SET_CURRENT_TAG, tagid });
