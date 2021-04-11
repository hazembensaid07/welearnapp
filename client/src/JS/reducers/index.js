import { combineReducers } from "redux";
import { contactReducer } from "./contact";
import { courseReducer } from "./course";
import { blogReducer } from "./blog";

export const rootReducer = combineReducers({
  contactReducer,
  courseReducer,
  blogReducer,
});
