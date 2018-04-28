import { SET_RATING_FILTER, SET_COMMENT_FILTER } from '../actions/constants';

import { applyNewRatingFilter } from '../helpers/filters';

const filters = (state = { ratings: [], comment: null }, action) => {
  switch (action.type) {
    case SET_RATING_FILTER: {
      return {
        ...state,
        ratings: applyNewRatingFilter(state.ratings, action.rating, action.active),
      };
    }
    case SET_COMMENT_FILTER: {
      return {
        ...state,
        comment: action.filter,
      };
    }
    default:
      return state;
  }
};

export default filters;
