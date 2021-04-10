import {
  GET_COMMENTS_LOAD,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  ADD_SUM,
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
    dispatch(addSumComment());
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAIL, payload: error });
  }
};

export const addSumComment = () => async (dispatch) => {
  dispatch({ type: ADD_SUM });
};
