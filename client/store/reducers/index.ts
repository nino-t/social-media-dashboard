import { combineReducers, Reducer } from 'redux'
import { reducer as notificationsReducer } from 'reapop'
import { connectRouter } from 'connected-react-router'

import users from './users'
import posts from './posts'
import albums from './albums'
import history from '../../utils/history'

const createReducer = (): Reducer => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    notifications: notificationsReducer(),
    users,
    posts,
    albums
  })

  return rootReducer
}

export default createReducer
