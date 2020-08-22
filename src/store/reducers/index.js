import { combineReducers } from 'redux';

//Import reducer files
import auth from './auth';
import listUsers from './listUsers'

const appReducer = combineReducers({
  auth,
  listUsers
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;
