import {applyMiddleware, createStore, compose} from 'react-redux'
import mainReducer from './reducers/mainReducer';
import {logger} from "redux-logger";
const initialState = {
    dataInitial: null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // development
//const composeEnhancers = compose; // build

export const store = createStore(
    mainReducer, initialState,
    composeEnhancers(applyMiddleware(logger))
);
