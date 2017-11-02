const initialState = false

export default (state = initialState, {type, payload}) => {

  switch (type) {
    case 'deals/FETCH_START': {
        state = false
        break
    }
    case 'deals/FETCH_SUCCESS': {
        state = payload
        break
    }
    case 'deals/FETCH_ERROR': {
        // TODO: Show button "try to load again"
        break
    }
  }

  return (typeof state === 'boolean')
    ? state
    : [...state]
}
