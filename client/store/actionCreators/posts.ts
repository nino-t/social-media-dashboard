/* eslint-disable @typescript-eslint/no-explicit-any */
import _get from 'lodash/get'
import _find from 'lodash/find'
import { notify } from 'reapop'
import _filter from 'lodash/filter'
import actionTypes from '../actionTypes'
import _findIndex from 'lodash/findIndex'
import { push } from 'connected-react-router'
import { loadCache, saveCache } from '../../utils/cache'
import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

export const CACHE_KEY = 'WEB/POSTS'

export const fetchPosts =
  () =>
  (dispatch: PostsDispatch, getState: never, api: AxiosInstance): Promise<any[] | Post[]> => {
    dispatch({ type: actionTypes.FETCH_POSTS_REQUEST })

    const cache = loadCache(CACHE_KEY)
    if (cache) {
      dispatch({ type: actionTypes.FETCH_POSTS_SUCCESS, data: cache })
      return cache
    }

    return api
      .get('/posts')
      .then((response: AxiosResponse) => _get(response, 'data', []))
      .then(
        (data: Post[]) => {
          saveCache(CACHE_KEY, data)
          dispatch({ type: actionTypes.FETCH_POSTS_SUCCESS, data })
          return data
        },
        (error: AxiosError) => {
          dispatch({
            type: actionTypes.FETCH_POSTS_ERROR,
            error: _get(error, 'response.statusText', 'Unexpected Error!!!')
          })
          return []
        }
      )
  }

export const fetchPost =
  (id: number, callback: (results: null | Post) => void) =>
  (dispatch: never, getState: never, api: AxiosInstance): void => {
    const cache = loadCache(CACHE_KEY)
    if (cache) {
      const postExist = _find(cache, (post) => {
        return post.id === id
      })

      if (postExist) {
        callback(postExist)
        return
      }
    }

    api
      .get(`/posts/${id}`)
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then(
        (data: Post) => {
          callback(data)
        },
        () => {
          callback(null)
        }
      )
  }

export const createPost =
  (payload: Post) =>
  (dispatch: PostsDispatch, getState: () => AppState, api: AxiosInstance): Promise<boolean> => {
    return api
      .post('/posts', {
        ...payload
      })
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then((data: Post) => {
        if (!data) {
          throw new Error('Oops, something went wrong!')
        }

        saveCache(CACHE_KEY, [data, ...getState().posts.data])
        dispatch({ type: actionTypes.CREATE_NEW_POST, data: [data] })
        return data
      })
      .then(
        () => {
          dispatch(push('/posts'))
          dispatch(notify('New Post Succesfully Added', 'success'))
          return true
        },
        (error: AxiosError) => {
          const errorMessage = _get(
            error.toJSON ? error.toJSON() : { message: error.toString() },
            'message',
            'Unexpected Error!!!'
          )
          dispatch(notify(errorMessage, 'error'))
          return false
        }
      )
  }

export const updatePost =
  (payload: Post, id: number) =>
  (dispatch: PostsDispatch, getState: () => AppState, api: AxiosInstance): Promise<boolean> => {
    payload.id = id
    return api
      .patch(`/posts/${id}`, {
        ...payload
      })
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then((data: Post) => {
        if (!data) {
          throw new Error('Oops, something went wrong!')
        }

        let postsAfterUpdate: Post[] = []
        const cache = loadCache(CACHE_KEY)
        if (cache) {
          const indexPost = _findIndex(cache, (post: Post) => {
            return post.id === id
          })

          cache[indexPost] = payload
          postsAfterUpdate = cache
        }

        saveCache(CACHE_KEY, postsAfterUpdate)
        dispatch({ type: actionTypes.REINIT_DATA_POSTS, data: postsAfterUpdate })
        return data
      })
      .then(
        () => {
          dispatch(push('/posts'))
          dispatch(notify('Post Succesfully Updated', 'success'))
          return true
        },
        (error: AxiosError) => {
          const errorMessage = _get(
            error.toJSON ? error.toJSON() : { message: error.toString() },
            'message',
            'Unexpected Error!!!'
          )
          dispatch(notify(errorMessage, 'error'))
          return false
        }
      )
  }

export const deletePost =
  (id: number) =>
  (dispatch: PostsDispatch, getState: never, api: AxiosInstance): Promise<boolean> => {
    return api
      .delete(`/posts/${id}`)
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then(() => {
        let postsAfterDelete = []
        const cache = loadCache(CACHE_KEY)
        if (cache) {
          postsAfterDelete = _filter(cache, (post) => {
            return post.id !== id
          })
        }

        saveCache(CACHE_KEY, postsAfterDelete)
        dispatch({ type: actionTypes.REINIT_DATA_POSTS, data: postsAfterDelete })
        return postsAfterDelete
      })
      .then(
        () => {
          dispatch(push('/posts'))
          dispatch(notify('Post Succesfully Deleted', 'success'))
          return true
        },
        (error: AxiosError) => {
          const errorMessage = _get(
            error.toJSON ? error.toJSON() : { message: error.toString() },
            'message',
            'Unexpected Error!!!'
          )
          dispatch(notify(errorMessage, 'error'))
          return false
        }
      )
  }
