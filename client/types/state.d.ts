type AppState = {
  readonly users: UsersState
  readonly posts: PostsState
  readonly albums: AlbumsState
  readonly comments: CommentsState
  readonly notifications: any
}

type UsersState = {
  meta: {
    isLoading: boolean
    errorMessage: string
  }
  data: User[]
}

type PostsState = {
  meta: {
    isLoading: boolean
    errorMessage: string
  }
  data: Post[]
}

type AlbumsState = {
  meta: {
    isLoading: boolean
    errorMessage: string
  }
  data: Album[]
}

type CommentsState = {
  meta: {
    isLoading: boolean
    errorMessage: string
  }
  data: Comment[]
}
