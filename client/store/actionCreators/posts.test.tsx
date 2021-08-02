/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { Provider } from 'react-redux'
import { mount, ReactWrapper } from 'enzyme'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import * as posts from './posts'
import history from '../../utils/history'
import { loadCache } from '../../utils/cache'
import configureStore from '../configureStore'

const App = (): JSX.Element => (
  <>
    <Switch>
      <Route exact path="/" component={() => <p>Home</p>} />
      <Route exact path="/posts" component={() => <p>Posts</p>} />
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

describe('function fetchPosts', () => {
  const wrapper = setup()
  const store = wrapper.find(Provider).prop('store')

  test('data is loaded and not empty', async () => {
    const results = await store.dispatch(posts.fetchPosts())
    expect(results.length).toBeGreaterThan(0)
  })

  test('reducers data is seted and not empty', async () => {
    await store.dispatch(posts.fetchPosts())
    expect(store.getState().posts.data.length).toBeGreaterThan(0)
  })

  test('results seted to cache', async () => {
    await store.dispatch(posts.fetchPosts())
    const postsCache = loadCache(posts['CACHE_KEY'])
    expect(postsCache && postsCache.length > 0).toBe(true)
  })
})

describe('function fetchPost', () => {
  const wrapper = setup()
  const store = wrapper.find(Provider).prop('store')

  test('data is loaded and not null', () => {
    let temp = null
    store.dispatch(
      posts.fetchPost(1, (result) => {
        temp = result
      })
    )

    expect(temp).not.toBe(null)
  })
})

describe('function createPost', () => {
  const wrapper = setup()
  const store = wrapper.find(Provider).prop('store')

  test('create post is success', async () => {
    const payload: Post = {
      userId: 1,
      title: 'Hello World',
      body: 'Dummy text is loream ipsum...'
    }

    const isSuccess = await store.dispatch(posts.createPost(payload))
    expect(isSuccess).toBe(true)
  })
})

describe('function updatePost', () => {
  const wrapper = setup()
  const store = wrapper.find(Provider).prop('store')

  test('update post is success', async () => {
    const payload: Post = {
      userId: 1,
      title: 'Hello World',
      body: 'Dummy text is loream ipsum...'
    }

    const isSuccess = await store.dispatch(posts.updatePost(payload, payload.id || 0))
    expect(isSuccess).toBe(true)
  })
})

describe('function deletePost', () => {
  const wrapper = setup()
  const store = wrapper.find(Provider).prop('store')

  test('delete post is success', async () => {
    const isSuccess = await store.dispatch(posts.deletePost(1))
    expect(isSuccess).toBe(true)
  })
})
