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

type AlbumsAction = {
  type: string
  data?: Post[]
  error?: string
}

type CommentsAction = {
  type: string
  data?: Comment[]
  error?: string
}
