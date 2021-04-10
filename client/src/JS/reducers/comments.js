import {
  GET_COMMENTS_LOAD,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  ADD_SUM,
} from "../constants/comments";

// initial state
const initialState = {
  comments: [],
  loadComments: false,
  errors: null,
  sumComments: 0,
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
    case ADD_SUM:
      return { ...state, sumComments: state.sumComments + 1 };

    default:
      return state;
  }
};
