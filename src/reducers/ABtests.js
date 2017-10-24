import { getRelevantValues } from 'index/sync'

const initialState = {}

export default (state = initialState, action) => {

  state = getRelevantValues(state)

  switch (action.type) {
    case 'ABtests/CHANGE_VALUES': {
      state[action.payload.name] = action.payload.value
      break
    }
    case 'ABtests/SYNC' : {
      state = action.payload
      break
    }
  }

  return {...state}
}
