import {
  START_LOADING,
  SUCCESS_LOADING,
  ERROR_LOADING,
  SET_RATING_FILTER,
  SET_COMMENT_FILTER,
  SET_PAGE,
} from './constants';

export const setPage = page => ({
  type: SET_PAGE,
  page,
});

export const setRatingFilter = (rating, active) => ({
  type: SET_RATING_FILTER,
  rating,
  active,
});

export const setCommentFilter = filter => ({
  type: SET_COMMENT_FILTER,
  filter,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const successLoading = data => ({
  type: SUCCESS_LOADING,
  data,
});

export const errorLoading = data => ({
  type: ERROR_LOADING,
  data,
});

export const fetchFeedbacks = () => async dispatch => {
  dispatch(startLoading());

  try {
    const response = await fetch('https://static.usabilla.com/recruitment/apidemo.json');
    const json = await response.json();
    return dispatch(successLoading(json));
  } catch (e) {
    return dispatch(errorLoading(e));
  }
};
