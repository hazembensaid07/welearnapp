import {
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../constants/user";
import axios from "axios";
import { getCookie } from "../../Components/auth/helpers";
export const getUsers = () => (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });

  const token = getCookie("token");

  axios({
    method: "GET",
    url: "api/admin/users",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      dispatch({ type: GET_USERS_SUCCESS, payload: response.data.response });
    })
    .catch((error) => {
      dispatch({ type: GET_USERS_FAIL, payload: error });
      console.log(error);
    });
};

export const deleteUser = (id) => (dispatch) => {
  const token = getCookie("token");

  axios({
    method: "DELETE",
    url: `api/admin/user/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};
