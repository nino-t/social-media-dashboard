import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import PostsPage from '../PostsPage'
import UsersPage from '../UsersPage'
import Notification from './Notification'
import CommentsPage from '../CommentsPage'
import FormPostPage from '../FormPostPage'
import DashboardPage from '../DashboardPage'
import UserPostsPage from '../UserPostsPage'
import UserAlbumsPage from '../UserAlbumsPage'
import DetailPostPage from '../DetailPostPage'
import AlbumPhotosPage from '../AlbumPhotosPage'
import FormCommentPage from '../FormCommentPage'

const AppWrapper = styled.div`
  margin: 0 auto;
`

const App = (): JSX.Element => {
  return (
    <>
      <Notification />
      <AppWrapper>
        <Helmet titleTemplate="%s | SM Dashboard" defaultTitle="Dashboard">
          <meta name="description" content="Social Media Dashboard" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/dashboard" component={DashboardPage} />

          {/* POSTS */}
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/posts/new" component={FormPostPage} />
          <Route exact path="/posts/:id/edit" component={FormPostPage} />

          {/* USERS */}
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/users/:id/posts" component={UserPostsPage} />
          <Route exact path="/users/:id/posts/:postId/detail" component={DetailPostPage} />
          <Route exact path="/users/:id/albums" component={UserAlbumsPage} />
          <Route exact path="/users/:id/albums/:albumId/photos" component={AlbumPhotosPage} />

          {/* COMMENTS */}
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/comments/new" component={FormCommentPage} />
          <Route exact path="/comments/:id/edit" component={FormCommentPage} />
        </Switch>
      </AppWrapper>
    </>
  )
}

export default App
