import axios from "axios";

//The login action creator should dispatch a "logging in" action, return the promise created by axios.post, then save the returned token to localStorage. You can connect your Login component, and show a spinner on your form or in your button while the login request is happening.

export const LOGGING_IN = "LOGGING_IN";

export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN }); //dispatch a "logging in" action
  return axios //return the promise created by axios.post
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
    });
};
