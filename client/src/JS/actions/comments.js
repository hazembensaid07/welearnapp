import {
  GET_COMMENTS_LOAD,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from "../constants/comments";
import axios from "axios";

export const getComments = () => async (dispatch) => {
  dispatch({ type: GET_COMMENTS_LOAD });
  try {
    let result = await axios.get("http://localhost:8000/api/comments");
    dispatch({ type: GET_COMMENTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAIL, payload: error });
    console.log(error);
  }
};

export const sendComment = (comment) => async (dispatch) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/api/comments",
      comment
    );
    dispatch(getComments());
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAIL, payload: error });
  }
};
