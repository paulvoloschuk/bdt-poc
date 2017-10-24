import createHistory from 'history/createBrowserHistory'
import { routerMiddleware as router } from 'react-router-redux'
import thunk from 'redux-thunk'
import sync from './sync'

export const history = createHistory()

const middleware = [
  sync,
  thunk,
  router(history)
]

export default middleware
