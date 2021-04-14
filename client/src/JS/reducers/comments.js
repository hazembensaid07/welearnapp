import {
  GET_COMMENTS_LOAD,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from "../constants/comments";

// initial state
const initialState = {
  comments: [],
  loadComments: false,
  errors: null,
};

export const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS_LOAD:
      return { ...state, loadComments: true };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loadComments: false,
        comments: payload,
      };
    case GET_COMMENTS_FAIL:
      return { ...state, loadComments: false, errors: payload };

    default:
      return state;
  }
};
