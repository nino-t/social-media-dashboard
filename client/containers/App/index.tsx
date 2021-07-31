import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import DashboardPage from '../DashboardPage'
import AboutPage from '../AboutPage'

const AppWrapper = styled.div`
  margin: 0 auto;
`

const App = (): JSX.Element => {
  return (
    <>
      <AppWrapper>
        <Helmet titleTemplate="%s | SM Dashboard" defaultTitle="Dashboard">
          <meta name="description" content="Social Media Dashboard" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </AppWrapper>
    </>
  )
}

export default App
