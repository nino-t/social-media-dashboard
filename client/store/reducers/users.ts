import produce from 'immer'
import actionTypes from '../actionTypes'

const initialState: UsersState = {
  meta: {
    isLoading: false,
    errorMessage: ''
  },
  data: []
}

const users = (state: UsersState = initialState, action: UsersAction): UsersState => {
  return produce(state, (draft: UsersState) => {
    switch (action.type) {
      case actionTypes.FETCH_USERS_REQUEST:
        draft.meta.isLoading = true
        draft.meta.errorMessage = ''
        draft.data = []
        break

      case actionTypes.FETCH_USERS_SUCCESS:
        draft.meta.isLoading = false
        draft.meta.errorMessage = ''
        draft.data = action.data || []
        break

      case actionTypes.FETCH_USERS_ERROR:
        draft.meta.isLoading = false
        draft.meta.errorMessage = action.error || 'Unexpected Error!!!'
        draft.data = []
        break
    }
  })
}

export default users
