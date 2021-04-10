import axios from "axios";
import {
  GET_COURSES_LOAD,
  GET_COURSES_FAIL,
  GET_COURSE_BY_ID,
  GET_COURSES_BY_CATEGORY,
} from "../constants/course";
export const getCourses = (category) => async (dispatch) => {
  dispatch({ type: GET_COURSES_LOAD });
  try {
    const res = await axios.get(
      `http://localhost:8000/api/coursesbycategory/${category}`
    );

    dispatch({
      type: GET_COURSES_BY_CATEGORY,
      payload: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: GET_COURSES_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
export const getCoursesById = (id) => async (dispatch) => {
  dispatch({ type: GET_COURSES_LOAD });
  try {
    const res = await axios.get(`http://localhost:8000/api/course/${id}`);
    dispatch({
      type: GET_COURSE_BY_ID,
      payload: res.data.result,
    });
  } catch (error) {
    dispatch({
      type: GET_COURSES_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
