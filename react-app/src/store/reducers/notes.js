import { SET_NOTES } from '../actions/notes';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_NOTES:
            return action.notes;
        default:
            return state;
    }
}