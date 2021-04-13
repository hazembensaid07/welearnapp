import {
  GET_COURSENROLL_LOAD,
  GET_COURSENROLL_SUCCESS,
  GET_COURSENROLL_FAIL,
} from "../constants/courseEnroll";
import axios from "axios";

export const getCourses = (id) => async (dispatch) => {
  dispatch({ type: GET_COURSENROLL_LOAD });
  try {
    let result = await axios.get(
      `http://localhost:8000/api/comments?userID=${id}`
    );
    console.log(result.data.response);
    dispatch({ type: GET_COURSENROLL_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_COURSENROLL_FAIL, payload: error });
    console.log(error);
  }
};

export const addCourse = (id) => async (dispatch) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/api/coursenroll",
      id
    );
    console.log(result);
    dispatch(getCourses(id.userID));
  } catch (error) {
    dispatch({ type: GET_COURSENROLL_FAIL, payload: error });
  }
};
