import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'

import users from './users'
import posts from './posts'
import history from '../../utils/history'

const createReducer = (): Reducer => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    users,
    posts
  })

  return rootReducer
}

export default createReducer
