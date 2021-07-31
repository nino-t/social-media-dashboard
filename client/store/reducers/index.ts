import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'

import users from './users'
import history from '../../utils/history'

const createReducer = (): Reducer => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    users
  })

  return rootReducer
}

export default createReducer
