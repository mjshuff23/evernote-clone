import { baseUrl } from '../../config';
export const TOKEN_KEY = "authentication/token";
export const SET_TOKEN = 'authentication/SET_TOKEN';
export const REMOVE_TOKEN = 'authentication/REMOVE_TOKEN';

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });
