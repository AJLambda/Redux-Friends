import axios from "axios";
import axiosAuth from "../utils/axiosAuth";

export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axios
    .post("http://localhost:5000/api/login", creds, {
      username: "Lambda School",
      password: "i<3Lambd4"
    })
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS });
  return axiosAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};
