import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from "redux-thunk";
import user from './reducers/user';
<<<<<<< HEAD
import notebooks from './reducers/notebooks';
import notes from './reducers/notes';
import tags from './reducers/tags';
=======
import tag from './reducers/tag';
>>>>>>> created the basic shell for the reducer and actions for tags and note tags, and I created the routes for note tags

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    user,
<<<<<<< HEAD
    notebooks,
    notes,
    tags
=======
    tag
>>>>>>> created the basic shell for the reducer and actions for tags and note tags, and I created the routes for note tags
});

const configureStore = (initialState) => {
    return createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
