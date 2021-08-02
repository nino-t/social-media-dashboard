import _get from 'lodash/get'
import _find from 'lodash/find'
import { notify } from 'reapop'
import _filter from 'lodash/filter'
import actionTypes from '../actionTypes'
import _findIndex from 'lodash/findIndex'
import { push } from 'connected-react-router'
import { loadCache, saveCache } from '../../utils/cache'
import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const CACHE_KEY = 'WEB/COMMENTS'

export const fetchComments =
  () =>
  (dispatch: CommentsDispatch, getState: never, api: AxiosInstance): void => {
    dispatch({ type: actionTypes.FETCH_COMMENTS_REQUEST })

    const cache = loadCache(CACHE_KEY)
    if (cache) {
      dispatch({ type: actionTypes.FETCH_COMMENTS_SUCCESS, data: cache })
      return
    }

    api
      .get('/comments')
      .then((response: AxiosResponse) => _get(response, 'data', []))
      .then(
        (data: Comment[]) => {
          saveCache(CACHE_KEY, data)
          dispatch({ type: actionTypes.FETCH_COMMENTS_SUCCESS, data })
        },
        (error: AxiosError) =>
          dispatch({
            type: actionTypes.FETCH_COMMENTS_ERROR,
            error: _get(error, 'response.statusText', 'Unexpected Error!!!')
          })
      )
  }

export const fetchComment =
  (id: number, callback: any) =>
  (dispatch: never, getState: never, api: AxiosInstance): Promise<Comment | null> => {
    const cache = loadCache(CACHE_KEY)
    if (cache) {
      const commentExist = _find(cache, (comment) => {
        return comment.id === id
      })

      if (commentExist) {
        return callback(commentExist)
      }
    }

    return api
      .get(`/comments/${id}`)
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then(
        (data: Comment) => {
          return callback(data)
        },
        () => {
          return callback(null)
        }
      )
  }

export const createComment =
  (payload: Comment) =>
  (dispatch: CommentsDispatch, getState: () => AppState, api: AxiosInstance): void => {
    api
      .post('/comments', {
        ...payload
      })
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then((data: Comment) => {
        if (!data) {
          throw new Error('Oops, something went wrong!')
        }

        saveCache(CACHE_KEY, [data, ...getState().comments.data])
        dispatch({ type: actionTypes.CREATE_NEW_COMMENT, data: [data] })
        return data
      })
      .then(
        () => {
          dispatch(push('/comments'))
          dispatch(notify('New Comment Succesfully Added', 'success'))
        },
        (error: AxiosError) => {
          const errorMessage = _get(
            error.toJSON ? error.toJSON() : { message: error.toString() },
            'message',
            'Unexpected Error!!!'
          )
          dispatch(notify(errorMessage, 'error'))
        }
      )
  }

export const updateComment =
  (payload: Comment, id: number) =>
  (dispatch: CommentsDispatch, getState: () => AppState, api: AxiosInstance): void => {
    payload.id = id
    api
      .patch(`/comments/${id}`, {
        ...payload
      })
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then((data: Comment) => {
        if (!data) {
          throw new Error('Oops, something went wrong!')
        }

        let commentsAfterUpdate: Comment[] = []
        const cache = loadCache(CACHE_KEY)
        if (cache) {
          const indexComment = _findIndex(cache, (comment: Comment) => {
            return comment.id === id
          })

          cache[indexComment] = payload
          commentsAfterUpdate = cache
        }

        saveCache(CACHE_KEY, commentsAfterUpdate)
        dispatch({ type: actionTypes.REINIT_DATA_COMMENTS, data: commentsAfterUpdate })
        return data
      })
      .then(
        () => {
          dispatch(push('/comments'))
          dispatch(notify('Comment Succesfully Updated', 'success'))
        },
        (error: AxiosError) => {
          const errorMessage = _get(
            error.toJSON ? error.toJSON() : { message: error.toString() },
            'message',
            'Unexpected Error!!!'
          )
          dispatch(notify(errorMessage, 'error'))
        }
      )
  }

export const deleteComment =
  (id: number) =>
  (dispatch: CommentsDispatch, getState: never, api: AxiosInstance): void => {
    api
      .delete(`/comments/${id}`)
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then(() => {
        let commentsAfterDelete = []
        const cache = loadCache(CACHE_KEY)
        if (cache) {
          commentsAfterDelete = _filter(cache, (comment) => {
            return comment.id !== id
          })
        }

        saveCache(CACHE_KEY, commentsAfterDelete)
        dispatch({ type: actionTypes.REINIT_DATA_COMMENTS, data: commentsAfterDelete })
        return commentsAfterDelete
      })
      .then(
        () => {
          dispatch(push('/comments'))
          dispatch(notify('Comment Succesfully Deleted', 'success'))
        },
        (error: AxiosError) => {
          const errorMessage = _get(
            error.toJSON ? error.toJSON() : { message: error.toString() },
            'message',
            'Unexpected Error!!!'
          )
          dispatch(notify(errorMessage, 'error'))
        }
      )
  }
