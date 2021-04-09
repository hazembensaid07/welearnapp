import axios from "axios";
import { SEND_CONTACTS_FAIL } from "../constants/contact";
export const postContacts = (message) => async (dispatch) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/api/contact",
      message
    );
  } catch (error) {
    dispatch({ type: SEND_CONTACTS_FAIL, payload: error });
  }
};
