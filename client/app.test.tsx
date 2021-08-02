/**
 * @jest-environment jsdom
 */

import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { Provider } from 'react-redux'
import { ConnectedRouter, push } from 'connected-react-router'

import history from './utils/history'
import AppContainer from './containers/App'
import configureStore from './store/configureStore'

const setup = (): ReactWrapper => {
  const initialState = {} as AppState
  const store = configureStore(initialState, history)

  return mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </Provider>
  )
}

test('full renders without error', () => {
  const wrapper = setup()
  expect(wrapper).toBeTruthy()
})

describe('redux connection', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = setup()
  })

  test('render the connected AppContainer', () => {
    expect(wrapper.find(AppContainer).length).toEqual(1)
  })

  test('render the connected redux provider', () => {
    expect(wrapper.find(Provider).prop('store').getState()).toBeTruthy()
  })

  test('redux store react router working (Go to Page)', () => {
    const store = wrapper.find(Provider).prop('store')

    const targetURL = '/about'
    const prevURL = store.getState().router.location.pathname

    store.dispatch(push(targetURL))
    expect(prevURL).not.toBe(targetURL)
  })
})
