import { SET_PAGE, SET_RATING_FILTER, SET_COMMENT_FILTER } from '../actions/constants';

const pagination = (state = { page: 1, pageSize: 10 }, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return {
        ...state,
        page: action.page,
      };
    }
    case SET_RATING_FILTER: {
      return {
        ...state,
        page: 1,
      };
    }
    case SET_COMMENT_FILTER: {
      return {
        ...state,
        page: 1,
      };
    }
    default:
      return state;
  }
};

export default pagination;
