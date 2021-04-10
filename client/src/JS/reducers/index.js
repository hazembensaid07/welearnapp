import { combineReducers } from "redux";
import { contactReducer } from "./contact";
<<<<<<< Updated upstream
import { courseReducer } from "./course";

const rootReducer = combineReducers({ contactReducer, courseReducer });
export default rootReducer;
=======
import { commentsReducer } from "./comments";

export const rootReducer = combineReducers({ contactReducer, commentsReducer });
>>>>>>> Stashed changes
