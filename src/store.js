import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
import Reducers from './reducers'

const middleware = [
  logger(),
  ReduxThunk,
  promiseMiddleware()
]

const enhancers = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f
);

//Creating store with reducer and initialState
export const store = createStore(Reducers, {}, enhancers)
