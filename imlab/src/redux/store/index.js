import {createStore, combineReducers} from "redux";
import counterReducer from "../reducers";

const rootReducers = combineReducers({
    item: counterReducer
});

export const store = createStore(rootReducers);