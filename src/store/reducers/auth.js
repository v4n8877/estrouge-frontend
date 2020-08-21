import {ACTIONS} from '../actions/auth';
import Storage from '../../ultis/storage';

const initialState = {
  status: null,
  error: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // ACTIONS WITHOUT DATA WILL BE PLACES HERE
    case ACTIONS.LOGIN_PROGRESS:
      return {
        ...state,
        status: action.type,
      };

    // ACTIONS WITH DATA WILL BE PLACES HERE
    case ACTIONS.LOGIN_SUCCESS:
      Storage.set("USER_ACCESS_TOKEN", action.data.user.token);
     
      return {
        ...state,
        status: action.type,
        token: action.data.user.token,
      };

      case ACTIONS.LOGOUT:
      Storage.remove('USER_ACCESS_TOKEN');
      return {
          ...state,
          status: action.type,
          token: null
      };

    // ACTION FAILED WILL BE PLACED HERE
    case ACTIONS.LOGIN_FAILED:
      return {
        ...state,
        status: action.type,
        error: action.data.error.message,
        errorStatus: action.data.error.status,
        errorTitle: action.data.error.title,
      };
    default:
      return state;
  }
}