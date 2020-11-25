import { authenticate, login } from "../../services/auth";

export const USER_KEY = "authentication/USER";
export const SET_USER = 'authentication/SET_USER';
export const REMOVE_USER = 'authentication/REMOVE_USER';

export const removeUser = () => ({ type: REMOVE_USER });
export const setUser = (user) => ({ type: SET_USER, user });

export const authenticateThunk = () => async (dispatch) => {
  const user = await authenticate();
  console.log(user, '\nAUTHENTICATETHUNK');
  if (!user.errors) {
    dispatch(setUser(user));
  }
};

export const loginThunk = (email, password) => async (dispatch) => {
  const user = await login();
  console.log(user, '\nLOGINTHUNK');
  if (!user.errors) {
    dispatch(setUser(user));
  }
};
