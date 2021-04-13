import { combineReducers } from "redux";
import { contactReducer } from "./contact";
import { courseReducer } from "./course";
import { blogReducer } from "./blog";
import { commentsReducer } from "./comments";
import { courseEnrollReducer } from "./courseEnroll";

export const rootReducer = combineReducers({
  contactReducer,
  courseReducer,
  blogReducer,
  commentsReducer,
  courseEnrollReducer,
});
