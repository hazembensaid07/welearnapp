import {
  GET_COMMENTS_LOAD,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  ADD_SUM,
} from "../constants/comments";
import { getCookie } from "../../Components/auth/helpers";
import axios from "axios";

export const getComments = (id) => async (dispatch) => {
  dispatch({ type: GET_COMMENTS_LOAD });
  try {
    let result = await axios.get(`http://localhost:8000/api/comments?id=${id}`);
    console.log(result.data.response);
    dispatch({ type: GET_COMMENTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAIL, payload: error });
    console.log(error);
  }
};

export const sendComment = (comment) => async (dispatch) => {
  try {
    const token = getCookie("token");
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const result = await axios.post(
      "http://localhost:8000/api/comments",
      comment,
      options
    );
    console.log(result);
    dispatch(getComments(comment.articleID));
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAIL, payload: error });
  }
};

export const addSumComment = () => async (dispatch) => {
  dispatch({ type: ADD_SUM });
};
