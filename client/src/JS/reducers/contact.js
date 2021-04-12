import {
  SEND_CONTACTS_FAIL,
  SEND_CONTACTS_SUCCESS,
} from "../constants/contact";

// initial state
const initialState = {
  errors: null,
  response: "",
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_CONTACTS_FAIL:
      return { ...state, errors: payload };
    case SEND_CONTACTS_SUCCESS:
      return { ...state, response: payload };

    default:
      return state;
  }
};
