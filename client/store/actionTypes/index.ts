import * as users from './users'
import * as posts from './posts'
import * as albums from './albums'
import * as comments from './comments'

export default {
  ...users,
  ...posts,
  ...albums,
  ...comments
}
