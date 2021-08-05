import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

/* --- UI COMPONENTS --- */
import BerandaPage from '../BerandaPage'
import Notification from './Notification'

const AppWrapper = styled.div`
  margin: 0 auto;
`

const App = (): JSX.Element => {
  return (
    <>
      <Notification />
      <AppWrapper>
        <Helmet titleTemplate="%s | Indonesia Law" defaultTitle="Beranda">
          <meta name="description" content="Indonesia Law" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={BerandaPage} />
        </Switch>
      </AppWrapper>
    </>
  )
}

export default App
