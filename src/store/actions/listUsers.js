import { getEnv } from "env";
import { callApi } from "ultis/commonUtils";
import Storage from '../../ultis/storage';

const ACTIONS = {
  GET_LIST_USER_PROGRESS: "GET_LIST_USER_PROGRESS",
  GET_LIST_USER_SUCCESS: "GET_LIST_USER_SUCCESS",
  GET_LIST_USER_FAILED: "GET_LIST_USER_FAILED",
};

const updateStatus = (status, statusInfo) => {
  return {
    type: status,
    data: statusInfo
  }
};

const getListUsers =  () => {
  let config = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${Storage.get('USER_ACCESS_TOKEN')}`,
    }
  };

  return (dispatch) => {
    dispatch(updateStatus(ACTIONS.GET_LIST_USER_PROGRESS));
    callApi(getEnv('REACT_APP_API_SERVER') + '/v1/users',
      config,
      null,
      (data) => {
        dispatch(updateStatus(ACTIONS.GET_LIST_USER_SUCCESS, {listUsers: data}));
      },
      (err) => {
        dispatch(updateStatus(ACTIONS.GET_LIST_USER_FAILED, {error: err}));
      }
    );
  };
};

export {
  ACTIONS,
  getListUsers,
}