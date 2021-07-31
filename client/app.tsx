import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import './app.css'
import history from './utils/history'
import AppContainer from './containers/App'
import configureStore from './store/configureStore'

const initialState = {} as AppState
const store = configureStore(initialState, history)

const App = (): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>
)

export default App
