import produce from 'immer'
import actionTypes from '../actionTypes'

const initialState: AlbumsState = {
  meta: {
    isLoading: false,
    errorMessage: ''
  },
  data: []
}

const albums = (state: AlbumsState = initialState, action: AlbumsAction): AlbumsState => {
  return produce(state, (draft: AlbumsState) => {
    switch (action.type) {
      case actionTypes.FETCH_ALBUMS_REQUEST:
        draft.meta.isLoading = true
        draft.meta.errorMessage = ''
        draft.data = []
        break

      case actionTypes.FETCH_ALBUMS_SUCCESS:
        draft.meta.isLoading = false
        draft.meta.errorMessage = ''
        draft.data = action.data || []
        break

      case actionTypes.FETCH_ALBUMS_ERROR:
        draft.meta.isLoading = false
        draft.meta.errorMessage = action.error || 'Unexpected Error!!!'
        draft.data = []
        break
    }
  })
}

export default albums
