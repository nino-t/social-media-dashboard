import * as users from './users'
import * as posts from './posts'
import * as albums from './albums'

export default {
  ...users,
  ...posts,
  ...albums
}
