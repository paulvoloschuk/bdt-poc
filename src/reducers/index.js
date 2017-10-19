import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import dealsReducer from './deals'
import filterReducer from './filter'
import abTestsReducer from './ABtests'

export default combineReducers({
  deals: dealsReducer,
  router: routerReducer,
  filter: filterReducer,
  abTests: abTestsReducer
})
