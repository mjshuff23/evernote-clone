import { authenticate, login, logout } from "../../services/auth";
import { setTags } from './tags';
import { setNotebooks } from './notebooks';
import { setNotes } from './notes';

export const USER_KEY = "authentication/USER";
export const SET_USER = 'authentication/SET_USER';
export const REMOVE_USER = 'authentication/REMOVE_USER';

export const removeUser = () => ({ type: REMOVE_USER });
export const setUser = (user) => ({ type: SET_USER, user });

export const authenticateThunk = () => async (dispatch) => {
    const data = await authenticate();
    if (!data.errors) {
        const { user, tags, notebooks, notes } = data;
        dispatch(setUser(user));
        dispatch(setTags(tags));
        dispatch(setNotebooks(notebooks));
        dispatch(setNotes(notes));
    }
};

export const loginThunk = (email, password) => async (dispatch) => {
    const data = await login(email, password);
    if (!data.errors) {
        const { user, tags, notebooks, notes } = data;
        dispatch(setUser(user));
        dispatch(setTags(tags));
        dispatch(setNotebooks(notebooks));
        dispatch(setNotes(notes));
    }
};

export const logoutThunk = () => async (dispatch) => {
    const user = await logout();
    dispatch(removeUser());
};
