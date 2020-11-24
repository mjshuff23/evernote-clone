import { baseUrl } from '../../config';
export const USER_KEY = "authentication/USER";
export const SET_USER = 'authentication/SET_USER';
export const REMOVE_USER = 'authentication/REMOVE_USER';

export const removeUser = () => ({ type: REMOVE_USER });
export const setUser = (user) => ({ type: SET_USER, user });

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    if (response.ok) {
        const user = await response.json();
        if (!user.errors) {
            dispatch(setUser(user));
        }
        return user;
    }
};
