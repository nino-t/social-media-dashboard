import _get from 'lodash/get'
import _find from 'lodash/find'
import actionTypes from '../actionTypes'
import { loadCache, saveCache } from '../../utils/cache'
import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const CACHE_KEY = 'WEB/USERS'

export const fetchUsers =
  () =>
  (dispatch: UsersDispatch, getState: never, api: AxiosInstance): void => {
    dispatch({ type: actionTypes.FETCH_USERS_REQUEST })

    const cache = loadCache(CACHE_KEY)
    if (cache) {
      dispatch({ type: actionTypes.FETCH_USERS_SUCCESS, data: cache })
      return
    }

    api
      .get('/users')
      .then((response: AxiosResponse) => _get(response, 'data', []))
      .then(
        (data: User[]) => {
          saveCache(CACHE_KEY, data)
          dispatch({ type: actionTypes.FETCH_USERS_SUCCESS, data })
        },
        (error: AxiosError) =>
          dispatch({
            type: actionTypes.FETCH_POSTS_ERROR,
            error: _get(error, 'response.statusText', 'Unexpected Error!!!')
          })
      )
  }

export const fetchUser =
  (id: number, callback: any) =>
  (dispatch: never, getState: never, api: AxiosInstance): Promise<Post | null> => {
    const cache = loadCache(CACHE_KEY)
    if (cache) {
      const userExist = _find(cache, (user) => {
        return user.id === id
      })

      if (userExist) {
        return callback(userExist)
      }
    }

    return api
      .get(`/users/${id}`)
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then(
        (data: User) => {
          return callback(data)
        },
        () => {
          return callback(null)
        }
      )
  }
