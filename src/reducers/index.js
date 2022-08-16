import { counterReducer } from "./counter";
import { logInReducer } from "./logIn";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    counter: counterReducer,
    logIn: logInReducer
});

