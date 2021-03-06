import produce from 'immer'
import actionTypes from '../actionTypes'

const initialState: PostsState = {
  meta: {
    isLoading: false,
    errorMessage: ''
  },
  data: []
}

const posts = (state: PostsState = initialState, action: PostsAction): PostsState => {
  return produce(state, (draft: PostsState) => {
    switch (action.type) {
      case actionTypes.FETCH_POSTS_REQUEST:
        draft.meta.isLoading = true
        draft.meta.errorMessage = ''
        draft.data = []
        break

      case actionTypes.FETCH_POSTS_SUCCESS:
        draft.meta.isLoading = false
        draft.meta.errorMessage = ''
        draft.data = action.data || []
        break

      case actionTypes.FETCH_POSTS_ERROR:
        draft.meta.isLoading = false
        draft.meta.errorMessage = action.error || 'Unexpected Error!!!'
        draft.data = []
        break

      case actionTypes.CREATE_NEW_POST:
        if (action.data) {
          draft.meta.isLoading = false
          draft.meta.errorMessage = ''
          draft.data.unshift(action.data[0])
        }
        break

      case actionTypes.REINIT_DATA_POSTS:
        draft.meta.isLoading = false
        draft.meta.errorMessage = ''
        draft.data = action.data || []
        break
    }
  })
}

export default posts
