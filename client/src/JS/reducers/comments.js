import {
  GET_COURSENROLL_LOAD,
  GET_COURSENROLL_SUCCESS,
  GET_COURSENROLL_FAIL,
} from "../constants/courseEnroll";

// initial state
const initialState = {
  coursEnroll: [],
  loadCourse: false,
  errors: null,
};

export const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COURSENROLL_LOAD:
      return { ...state, loadCourse: true };
    case GET_COURSENROLL_SUCCESS:
      return {
        ...state,
        loadCourse: false,
        coursEnroll: payload,
      };
    case GET_COURSENROLL_FAIL:
      return { ...state, loadCourse: false, errors: payload };

    default:
      return state;
  }
};
