const initialState = {}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'ABtests/CHANGE_VALUES': {
      state[action.payload.name] = action.payload.value
      break
    }
  }

  return {...state}
}
