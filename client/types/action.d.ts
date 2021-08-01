type UsersAction = {
  type: string
  data?: User[]
  error?: string
}

type PostsAction = {
  type: string
  data?: Post[]
  error?: string
}
