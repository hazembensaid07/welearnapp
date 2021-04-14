import {
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../constants/user";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });
  try {
    let result = await axios.get("http://localhost:8000/api/admin/users");
    dispatch({ type: GET_USERS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error });
    console.log(error);
  }
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/api/admin/user/${id}`)
    .then((response) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};
