type AppState = {
  readonly users: UsersState
  readonly posts: PostsState
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
