import {
  GET_COURSENROLL_LOAD,
  GET_COURSENROLL_SUCCESS,
  GET_COURSENROLL_FAIL,
} from "../constants/courseEnroll";
import axios from "axios";
import { getCookie } from "../../Components/auth/helpers";
export const getCourses = (user) => async (dispatch) => {
  dispatch({ type: GET_COURSENROLL_LOAD });
  try {
    const token = getCookie("token");
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let result = await axios.get(
      `http://localhost:8000/api/coursenroll?user=${user}`,
      options
    );
    console.log(result.data.response);
    dispatch({ type: GET_COURSENROLL_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_COURSENROLL_FAIL, payload: error });
    console.log(error);
  }
};

export const addCourse = (enroll) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const result = await axios.post(
      "http://localhost:8000/api/coursenroll",
      enroll,
      options
    );

    dispatch(getCourses(enroll.user));
  } catch (error) {
    dispatch({ type: GET_COURSENROLL_FAIL, payload: error });
  }
};
