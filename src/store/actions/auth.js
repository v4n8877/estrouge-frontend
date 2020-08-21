import { getEnv } from "env";
import { callApiNoToken } from "ultis/commonUtils";

const ACTIONS = {
  LOGIN_PROGRESS: "LOGIN_PROGRESS",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",

  LOGOUT: "LOGOUT",
};

const updateStatus = (status, statusInfo) => {
  return {
    type: status,
    data: statusInfo
  }
};

const login = (payload) => {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": payload.username,
      "password": payload.password,
    })
  };

  return (dispatch) => {
    dispatch(updateStatus(ACTIONS.LOGIN_PROGRESS));
    callApiNoToken(getEnv('REACT_APP_API_SERVER')+'/v1/login',
      config,
      null,
      (data) => {
        dispatch(updateStatus(ACTIONS.LOGIN_SUCCESS, {user: data}));
      },
      (err) => {
        dispatch(updateStatus(ACTIONS.LOGIN_FAILED, {error: err}));
      }
    );
  };
};

const logout = () => {
  return {
    type: ACTIONS.LOGOUT
  }
};

export {
  ACTIONS,
  login,
  logout,
};