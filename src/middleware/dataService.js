import axios from 'axios'
import { apiEntryPoints, loadDelay } from 'index/constants'

const dataService = ({dispatch}) => next => action => {
  let {type, payload} = action

  switch (type) {
    case 'deals/FETCH_START': {
      setTimeout(() => axios
        .get(apiEntryPoints.products)
        .then(response => dispatch({
          type: 'deals/FETCH_SUCCESS',
          payload: response.data
        })),
        loadDelay
      )
      break;
    }
  }

  next(action)
}

export default dataService
