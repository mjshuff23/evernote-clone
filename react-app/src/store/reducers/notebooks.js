import { SET_NOTEBOOKS } from '../actions/notebooks';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_NOTEBOOKS:
            return action.notebooks;
        default:
            return state;
    }
}