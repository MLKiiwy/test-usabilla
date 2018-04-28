import { START_LOADING, SUCCESS_LOADING, ERROR_LOADING } from '../actions/constants';

import cleaner from '../helpers/cleaner';

const feedbacks = (state = { data: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_LOADING:
      return {
        ...state,
        loading: false,
        data: cleaner(action.data),
      };
    case ERROR_LOADING:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default feedbacks;
