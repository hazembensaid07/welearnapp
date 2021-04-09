import { SEND_CONTACTS_FAIL } from "../constants/contact";

// initial state
const initialState = {
  errors: null,
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_CONTACTS_FAIL:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
