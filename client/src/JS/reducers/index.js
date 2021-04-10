import { combineReducers } from "redux";
import { contactReducer } from "./contact";
import { courseReducer } from "./course";

const rootReducer = combineReducers({ contactReducer, courseReducer });
export default rootReducer;
