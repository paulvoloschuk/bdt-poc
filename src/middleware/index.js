import createHistory from 'history/createBrowserHistory'
import { routerMiddleware as router } from 'react-router-redux'
import thunk from 'redux-thunk'
import sync from './sync'
import dataService from './dataService'

export const history = createHistory()

const middleware = [
  // stock
  router(history),
  thunk,
  // custom
  sync,
  dataService,
]

export default middleware
