/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { loadCache, saveCache } from './cache'

const delay = (t: number, v: any): Promise<any> => {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t)
  })
}

test('save cache', () => {
  const key = 'SAVE'
  const value = 'OK'

  const cacheSeted = saveCache(key, value)
  expect(cacheSeted).toBe(true)
})

test('load cache is undefined', () => {
  const cacheLoaded = loadCache('RANDOM')
  expect(cacheLoaded).toBe(undefined)
})

test('save and get cache', async () => {
  const key = 'status'
  const value = 'OK'

  saveCache(key, value)
  const valueFromCache = await delay(100, loadCache(key))

  expect(valueFromCache).toBe(value)
})
