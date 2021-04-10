import { combineReducers } from "redux";
import { contactReducer } from "./contact";
import { courseReducer } from "./course";
import { commentsReducer } from "./comments";

const rootReducer = combineReducers({
  contactReducer,
  courseReducer,
  commentsReducer,
});
export default rootReducer;
