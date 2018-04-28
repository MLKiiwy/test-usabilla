import { connect } from 'react-redux';
import { setPage, setCommentFilter, setRatingFilter } from '../../actions';
import TableHeaderBar from '../../components/TableHeaderBar';
import { applyFilters } from '../../helpers/filters';

const mapStateToProps = state => ({
  activeRatings: state.filters.ratings,
  count: applyFilters(state.filters, state.feedbacks.data).length,
  perPage: state.pagination.pageSize,
  actualPage: state.pagination.page,
});

const mapDispatchToProps = dispatch => ({
  onCommentFilterChange: filter => dispatch(setCommentFilter(filter)),
  onRatingFilterChange: (rating, active) => dispatch(setRatingFilter(rating, active)),
  onPageChange: page => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableHeaderBar);
