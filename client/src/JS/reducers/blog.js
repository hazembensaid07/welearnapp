import {
  GET_BLOG_LOAD,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_ID,
} from "../constants/blog";

// initial state
const initialState = {
  blog: [],
  loadBlog: false,
  errors: null,
  article: {},
};

export const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BLOG_LOAD:
      return { ...state, loadBlog: true };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        loadBlog: false,
        blog: payload,
      };
    case GET_BLOG_ID:
      return { ...state, loadBlog: false, article: payload };
    case GET_BLOG_FAIL:
      return { ...state, loadBlog: false, errors: payload };

    default:
      return state;
  }
};
