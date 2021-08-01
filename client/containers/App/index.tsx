import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import PostsPage from '../PostsPage'
import Notification from './Notification'
import FormPostPage from '../FormPostPage'
import DashboardPage from '../DashboardPage'

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
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/posts/new" component={FormPostPage} />
          <Route exact path="/posts/:id/edit" component={FormPostPage} />
        </Switch>
      </AppWrapper>
    </>
  )
}

export default App
