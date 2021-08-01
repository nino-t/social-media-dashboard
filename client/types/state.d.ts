type AppState = {
  readonly users: UsersState
  readonly posts: PostsState
  readonly albums: AlbumsState
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
