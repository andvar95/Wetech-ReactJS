
import thunk from "redux-thunk";//middleware to async functions
import {createStore, combineReducers,applyMiddleware, compose} from "redux";
import { rootReducer } from "../reducers"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)