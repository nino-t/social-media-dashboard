import produce from 'immer'
import actionTypes from '../actionTypes'

const initialState: CommentsState = {
  meta: {
    isLoading: false,
    errorMessage: ''
  },
  data: []
}

const comments = (state: CommentsState = initialState, action: CommentsAction): CommentsState => {
  return produce(state, (draft: CommentsState) => {
    switch (action.type) {
      case actionTypes.FETCH_COMMENTS_REQUEST:
        draft.meta.isLoading = true
        draft.meta.errorMessage = ''
        draft.data = []
        break

      case actionTypes.FETCH_COMMENTS_SUCCESS:
        draft.meta.isLoading = false
        draft.meta.errorMessage = ''
        draft.data = action.data || []
        break

      case actionTypes.FETCH_COMMENTS_ERROR:
        draft.meta.isLoading = false
        draft.meta.errorMessage = action.error || 'Unexpected Error!!!'
        draft.data = []
        break

      case actionTypes.CREATE_NEW_COMMENT:
        if (action.data) {
          draft.meta.isLoading = false
          draft.meta.errorMessage = ''
          draft.data.unshift(action.data[0])
        }
        break

      case actionTypes.REINIT_DATA_COMMENTS:
        draft.meta.isLoading = false
        draft.meta.errorMessage = ''
        draft.data = action.data || []
        break
    }
  })
}

export default comments
