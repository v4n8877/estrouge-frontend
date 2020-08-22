import { ACTIONS } from '../actions/listUsers';

const initialState = {
  status: null,
  error: null,
  listUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // ACTIONS WITHOUT DATA WILL BE PLACES HERE
    case ACTIONS.GET_LIST_USER_PROGRESS:
      return {
        ...state,
        status: action.type,
      };

    // ACTIONS WITH DATA WILL BE PLACES HERE
    case ACTIONS.GET_LIST_USER_SUCCESS:
     
      return {
        ...state,
        status: action.type,
        listUsers: action.data.listUsers,
      };

    // ACTION FAILED WILL BE PLACED HERE
    case ACTIONS.GET_LIST_USER_FAILED:
      return {
        ...state,
        status: action.type,
      };
    default:
      return state;
  }
}