import { SET_USER, REMOVE_USER } from '../actions/user';

export default function reducer(state = null, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case REMOVE_USER:
            return null;
        default:
            return state;
    }
}
