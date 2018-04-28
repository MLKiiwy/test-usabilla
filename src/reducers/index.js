import { combineReducers } from 'redux';
import feedbacks from './feedbacks';
import filters from './filters';
import pagination from './pagination';

export default combineReducers({
  feedbacks,
  filters,
  pagination,
});
