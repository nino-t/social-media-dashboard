/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { Provider } from 'react-redux'
import { mount, ReactWrapper } from 'enzyme'
import { Switch, Route, Link } from 'react-router-dom'
import { ConnectedRouter, push } from 'connected-react-router'

import history from './history'
import configureStore from '../store/configureStore'

const App = (): JSX.Element => (
  <>
    <Switch>
      <Route exact path="/" component={() => <p>Home</p>} />
      <Route
        path="/ping"
        component={() => (
          <>
            <p>Ping</p>
            <Link to="/about" className="open-about">
              Open About
            </Link>
          </>
        )}
      />
      <Route path="/about" component={() => <p>About</p>} />
    </Switch>
  </>
)

const setup = (): ReactWrapper => {
  const initialState = {} as AppState
  const store = configureStore(initialState, history)

  return mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  )
}

describe('redux action-history connection', () => {
  const wrapper = setup()
  const store = wrapper.find(Provider).prop('store')

  test('in home', () => {
    expect(wrapper.find('p').text()).toBe('Home')
  })

  test('push or redirect', () => {
    store.dispatch(push('/ping'))
    wrapper.update()

    expect(wrapper.find('p').text()).toBe('Ping')
  })

  test('open via link (react-router-dom)', () => {
    const button = wrapper.find('.open-about').first()
    button.simulate('click', { button: 0 })

    expect(wrapper.find('p').text()).toBe('About')
  })
})
