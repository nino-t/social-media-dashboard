import { compose } from 'redux'

declare module '*.jpg' {
  export default '' as string
}

declare module '*.png' {
  export default '' as string
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
