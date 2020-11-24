import { SET_TOKEN, REMOVE_TOKEN } from '../actions/authentication';

const initialState = '';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return action.token;
        case REMOVE_TOKEN:
            const newState = state;
            return '';
        default:
            return state;
    }
}
