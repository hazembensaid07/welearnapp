import {
  GET_COURSES_LOAD,
  GET_COURSES_FAIL,
  GET_COURSE_BY_ID,
  GET_COURSES_BY_CATEGORY,
} from "../constants/course";

const initState = {
  courses: [],
  loadCourses: false,
  errors: [],
  msg: "",
  course: {},
  totalPages: 0,
};

export const courseReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_COURSES_LOAD:
      return {
        ...state,
        loadCourses: true,
      };
    case GET_COURSES_BY_CATEGORY:
      return {
        ...state,
        courses: payload.courses,
        totalPages: payload.pages,
        loadCourses: false,
        errors: [],
      };
    case GET_COURSES_FAIL:
      return {
        ...state,
        errors: payload,
        loadCourses: false,
        courses: [],
      };

    case GET_COURSE_BY_ID:
      return {
        ...state,
        course: payload,
      };

    default:
      return state;
  }
};
