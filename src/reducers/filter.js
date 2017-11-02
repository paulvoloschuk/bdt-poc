const initialState = {
  category: 0
}

export default (state = initialState, {type, payload}) => {

  switch (type) {
    case 'filter/CHANGE_CATEGORY': {
      state.category = payload
      break
    }
    case 'deals/FETCH_SUCCESS': {
      // Filling filters
      state = payload.reduce((result, item) => {
        // min/max price
        if(!result.availMin || result.availMin > item.price) result.availMin = item.price
        if(!result.availMax || result.availMax < item.price) result.availMax = item.price

        return result
      }, {category: state.category})
      break
    }
  }

  return {...state};
}
