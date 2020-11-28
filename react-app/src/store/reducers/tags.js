import { SET_TAGS } from '../actions/tags';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_TAGS:
            return action.tags;
        default:
            return state;
    }
}