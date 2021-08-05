// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadCache = (key: string): any => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveCache = (key: string, state: unknown): boolean | undefined => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)

    return true
  } catch {
    return undefined
  }
}
