interface Album {
  id?: number
  userId: number
  title: string
  user?: User
  photos?: Photo[]
}
