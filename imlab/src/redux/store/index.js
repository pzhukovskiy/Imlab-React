import {createStore, combineReducers, applyMiddleware} from "redux";
import counterReducer from "../reducers";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    item: counterReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk));