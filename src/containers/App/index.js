import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilteredFeedbacksTable from '../../containers/FilteredFeedbacksTable';
import TableHeaderBar from '../../containers/TableHeaderBar';
import { fetchFeedbacks } from '../../actions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFeedbacks());
  }

  render() {
    return (
      <div>
        <TableHeaderBar />
        <FilteredFeedbacksTable />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
