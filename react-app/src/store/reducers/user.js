import { SET_USER, REMOVE_USER } from '../actions/user';

const initialState = {
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user };
        case REMOVE_USER:
            const newState = { ...state };
            delete newState.user;
            return newState;
        default:
            return state;
    }
}
