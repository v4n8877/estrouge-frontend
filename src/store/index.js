import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const confStore = (initialState = {}) => {
  const store = createStore(
    initialState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware)
    ),
  )
  return { store }
}

const { store } = confStore();

global.store = store;

export { store };
