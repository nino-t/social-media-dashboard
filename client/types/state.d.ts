type AppState = {
  readonly users: UsersState
}

type UsersState = {
  meta: {
    isLoading: boolean
    errorMessage: string
  }
  data: User[]
}
