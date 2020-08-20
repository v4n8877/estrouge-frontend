import { combineReducers } from 'redux';

//Import reducer files

const appReducer = combineReducers({
 
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;
