import { combineReducers } from "redux";
import { contactReducer } from "./contact";
import { courseReducer } from "./course";
import { blogReducer } from "./blog";
import { commentsReducer } from "./comments";
import { courseEnrollReducer } from "./courseEnroll";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  contactReducer,
  courseReducer,
  blogReducer,
  commentsReducer,
  courseEnrollReducer,
  userReducer,
});
