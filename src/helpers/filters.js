import { filter } from 'lodash';

export const applyNewRatingFilter = (filters, rating, active) => {
  if (active && !filters.includes(rating)) {
    return [...filters, rating];
  } else if (!active && filters.includes(rating)) {
    return filters.filter(e => e !== rating);
  }
  return filters;
};

export const applyFilters = ({ comment: filterComment, ratings }, comments) =>
  filter(comments, comment => {
    if (filterComment && !comment.comment.includes(filterComment)) {
      return false;
    }

    if (ratings.length > 0 && !ratings.includes(comment.rating)) {
      return false;
    }

    return true;
  });
