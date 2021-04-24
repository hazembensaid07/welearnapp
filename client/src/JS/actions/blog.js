import {
  GET_BLOG_LOAD,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_ID,
} from "../constants/blog";
import { getCookie } from "../../Components/auth/helpers";
import axios from "axios";

export const getBlog = () => async (dispatch) => {
  dispatch({ type: GET_BLOG_LOAD });
  try {
    let result = await axios.get("api/blog");
    console.log(result);
    dispatch({ type: GET_BLOG_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_BLOG_FAIL, payload: error });
    console.log(error);
  }
};

export const addArticle = (article) => async (dispatch) => {
  const token = getCookie("token");
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const result = await axios.post("api/blog", article, options);
    dispatch(getBlog());
  } catch (error) {
    dispatch({ type: GET_BLOG_FAIL, payload: error });
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  const token = getCookie("token");
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const result = axios.delete(`api/blog/${id}`, options);
    dispatch(getBlog());
  } catch (error) {
    dispatch({ type: GET_BLOG_FAIL, payload: error });
  }
};

export const editArticle = (id, user) => (dispatch) => {
  axios
    .put(`api/blog/${id}`, user)
    .then((response) => dispatch(getBlog()))
    .catch((err) => console.log(err));
};

export const getArticleByID = (id) => async (dispatch) => {
  dispatch({ type: GET_BLOG_LOAD });
  try {
    let result = await axios.get(`api/blog/${id}`);
    dispatch({ type: GET_BLOG_ID, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_BLOG_FAIL, payload: error });
    console.log(error);
  }
};
