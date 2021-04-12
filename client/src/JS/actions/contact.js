import axios from "axios";
import {
  SEND_CONTACTS_FAIL,
  SEND_CONTACTS_SUCCESS,
} from "../constants/contact";
export const postContacts = (message) => async (dispatch) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/api/contact",
      message
    );
    dispatch({ type: SEND_CONTACTS_SUCCESS, payload: result.data.message });
  } catch (error) {
    dispatch({ type: SEND_CONTACTS_FAIL, payload: error });
  }
};
