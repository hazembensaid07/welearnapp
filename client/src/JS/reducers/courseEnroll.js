import {
  GET_COURSENROLL_LOAD,
  GET_COURSENROLL_SUCCESS,
  GET_COURSENROLL_FAIL,
  ADD_SUM,
} from "../constants/courseEnroll";

// initial state
const initialState = {
  courseEnroll: [],
  loadCourseEnroll: false,
  errors: null,
};

export const courseEnrollReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_COURSENROLL_LOAD:
      return { ...state, loadCourseEnroll: true };
    case GET_COURSENROLL_SUCCESS:
      return {
        ...state,
        loadCourseEnroll: false,
        courseEnroll: payload,
      };
    case GET_COURSENROLL_FAIL:
      return { ...state, loadCourseEnroll: false, errors: payload };

    default:
      return state;
  }
};
