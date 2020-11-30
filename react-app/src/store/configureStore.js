import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from "redux-thunk";
import user from './reducers/user';
import notebooks from './reducers/notebooks';
import notes from './reducers/notes';
import tags from './reducers/tags';
import ui from './reducers/ui';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    user,
    notebooks,
    notes,
    tags,
    ui
});

const configureStore = (initialState) => {
    return createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
