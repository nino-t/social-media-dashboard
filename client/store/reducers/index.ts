import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as notificationsReducer } from 'reapop'

/* --- REDUX REDUCERS --- */
import history from '../../utils/history'

const createReducer = (): Reducer => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    notifications: notificationsReducer()
  })

  return rootReducer
}

export default createReducer
