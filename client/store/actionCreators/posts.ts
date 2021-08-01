import _get from 'lodash/get'
import actionTypes from '../actionTypes'
import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

export const fetchPosts =
  () =>
  (dispatch: PostsDispatch, getState: never, api: AxiosInstance): void => {
    dispatch({ type: actionTypes.FETCH_POSTS_REQUEST })
    api
      .get('/posts')
      .then((response: AxiosResponse) => _get(response, 'data', []))
      .then(
        (data: Post[]) => {
          dispatch({ type: actionTypes.FETCH_POSTS_SUCCESS, data })
        },
        (error: AxiosError) =>
          dispatch({
            type: actionTypes.FETCH_POSTS_ERROR,
            error: _get(error, 'response.statusText', 'Unexpected Error!!!')
          })
      )
  }
