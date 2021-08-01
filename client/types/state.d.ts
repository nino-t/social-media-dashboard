type AppState = {
  readonly users: UsersState
  readonly posts: PostsState
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
