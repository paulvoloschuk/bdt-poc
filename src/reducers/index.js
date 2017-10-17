import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import filterReducer from './filter'
import abTestsReducer from './ABtests'

export default combineReducers({
  router: routerReducer,
  filter: filterReducer,
  abTests: abTestsReducer
})
