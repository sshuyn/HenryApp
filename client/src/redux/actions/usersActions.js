import axios from "axios";

import {
  REQUEST_ACTION,
  REQUEST_SUCCESS_ACTION,
  REQUEST_FAILED_ACTION,
  GET_USER,
  GET_USERS,
  UPDATE_USER
} from "../constants/usersContants";

const requestAction = () => ({
  type: REQUEST_ACTION
});

const requestSuccessAction = () => ({
  type: REQUEST_SUCCESS_ACTION
});

const requestFailedAction = (error) => ({
  type: REQUEST_FAILED_ACTION,
  error
});

const getUsersAction = (users) => ({
  type: GET_USERS,
  users
});

const getUserAction = (user) => ({
  type: GET_USER,
  user
});

const updateUserAction = (user) => ({
  type: UPDATE_USER,
  user
});

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());

      const res = await axios.get("http://localhost:5000/users");

      dispatch(getUsersAction(res.data));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());
      const res = axios.get(`http://localhost:5000/users/user/${id}`);

      dispatch(getUserAction(res.data));
      dispatch(requestSuccessAction());

    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};

export const updateUser = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(requestAction());

      const res = await axios.patch(`http://localhost:5000/users/user/${id}`, data);

      dispatch(updateUserAction(res.data));
      dispatch(requestSuccessAction());
    } catch (error) {
      dispatch(requestFailedAction(error));
    }
  };
};
