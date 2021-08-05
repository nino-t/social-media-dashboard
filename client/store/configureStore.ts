import axios from 'axios'
import thunk from 'redux-thunk'
import { History } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose, Store } from 'redux'

import createReducer from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const configureStore = (initialState: AppState = <AppState>{}, history: History): Store => {
  let composeEnhancers = compose

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  const middlewares = [routerMiddleware(history), thunk.withExtraArgument(axiosInstance)]
  const enhancers = [applyMiddleware(...middlewares)]

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers))
  return store
}

export default configureStore
