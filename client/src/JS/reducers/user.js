import {
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../constants/user";
const initialState = {
  users: [],
  loadusers: false,
  errors: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_LOAD:
      return { ...state, loadusers: true };
    case GET_USERS_SUCCESS:
      return { ...state, loadusers: false, users: payload };

    case GET_USERS_FAIL:
      return { ...state, loadusers: false, errors: payload };
    default:
      return state;
  }
};
