import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk"; //NOT IN USE IN THIS VERSION

import postReducer from './reducers/postReducer';
import commentsReducer from './reducers/commentsReducer';

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentsReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;