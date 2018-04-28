import { connect } from 'react-redux';
import FeedbacksTable from '../../components/FeedbacksTable';
import { applyFilters } from '../../helpers/filters';
import applyPagination from '../../helpers/pagination';

const mapStateToProps = state => ({
  loading: state.feedbacks.loading,
  list: applyPagination(
    state.pagination.page,
    state.pagination.pageSize,
    applyFilters(state.filters, state.feedbacks.data),
  ),
  error: state.feedbacks.error,
});

export default connect(mapStateToProps)(FeedbacksTable);
