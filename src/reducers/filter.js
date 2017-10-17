const initialState = {
  category: 0
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'filter/CHANGE_CATEGORY': {
      state.category = action.payload
      break
    }
  }

  return {...state};
}
