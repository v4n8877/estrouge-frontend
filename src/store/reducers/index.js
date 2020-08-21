import { combineReducers } from 'redux';

//Import reducer files
import auth from './auth';

const appReducer = combineReducers({
  auth,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;
