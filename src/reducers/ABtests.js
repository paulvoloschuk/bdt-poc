import { getRelevantValues } from 'index/sync'

const initialState = {}

export default (state = initialState, {type, payload}) => {
  state = getRelevantValues(state)

  switch (type) {
    case 'ABtests/CHANGE_VALUES': {
      state[payload.name] = payload.value
      break
    }
    case 'ABtests/SYNC': {
      state = payload
      break
    }
  }

  return {...state}
}
