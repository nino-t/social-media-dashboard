import _get from 'lodash/get'
import actionTypes from '../actionTypes'
import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

export const fetchUsers =
  () =>
  (dispatch: UsersDispatch, getState: never, api: AxiosInstance): void => {
    dispatch({ type: actionTypes.FETCH_USERS_REQUEST })
    api
      .get('/users')
      .then((response: AxiosResponse) => _get(response, 'data', []))
      .then(
        (data: User[]) => {
          dispatch({ type: actionTypes.FETCH_USERS_SUCCESS, data })
        },
        (error: AxiosError) =>
          dispatch({ type: actionTypes.FETCH_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })
      )
  }
