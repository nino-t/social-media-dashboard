import _get from 'lodash/get'
import _find from 'lodash/find'
import actionTypes from '../actionTypes'
import { loadCache, saveCache } from '../../utils/cache'
import { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const CACHE_KEY = 'WEB/ALBUMS'

export const fetchAlbums =
  () =>
  (dispatch: PostsDispatch, getState: never, api: AxiosInstance): void => {
    dispatch({ type: actionTypes.FETCH_ALBUMS_REQUEST })

    const cache = loadCache(CACHE_KEY)
    if (cache) {
      dispatch({ type: actionTypes.FETCH_ALBUMS_SUCCESS, data: cache })
      return
    }

    api
      .get('/albums')
      .then((response: AxiosResponse) => _get(response, 'data', []))
      .then(
        (data: Post[]) => {
          saveCache(CACHE_KEY, data)
          dispatch({ type: actionTypes.FETCH_ALBUMS_SUCCESS, data })
        },
        (error: AxiosError) =>
          dispatch({
            type: actionTypes.FETCH_ALBUMS_ERROR,
            error: _get(error, 'response.statusText', 'Unexpected Error!!!')
          })
      )
  }

export const fetchAlbum =
  (id: number, callback: any) =>
  (dispatch: never, getState: never, api: AxiosInstance): Promise<Post | null> => {
    const cache = loadCache(CACHE_KEY)
    if (cache) {
      const postExist = _find(cache, (post) => {
        return post.id === id
      })

      if (postExist) {
        return callback(postExist)
      }
    }

    return api
      .get(`/albums/${id}`)
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then(
        (data: Post) => {
          return callback(data)
        },
        () => {
          return callback(null)
        }
      )
  }

export const fetchAlbumPhotos =
  (albumId: number, callback: any) =>
  (dispatch: never, getState: never, api: AxiosInstance): Promise<Post | null> => {
    return api
      .get(`/albums/${albumId}/photos`)
      .then((response: AxiosResponse) => _get(response, 'data', null))
      .then(
        (data: Post) => {
          return callback(data)
        },
        () => {
          return callback(null)
        }
      )
  }
