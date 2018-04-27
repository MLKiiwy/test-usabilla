import React from 'react';
import PropTypes from 'prop-types';
import RoundedButton from '../RoundedButton/RoundedButton'
import style from './style.scss';

// https://css-tricks.com/responsive-data-tables/

function FeedbacksTable({ loading, list, error }) {
  if (loading) {
    return <span>Loading ...</span>
  } else if (error) {
    return <span>{error}</span>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Rating</th>
          <th className="comment">Comment</th>
          <th>Browser</th>
          <th>Device</th>
          <th>Platform</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ rating, comment, browser, device, platform }) => (
          <tr>
            <td><RoundedButton rating={rating} /></td>
            <td className="comment">{comment}</td>
            <td>{browser}</td>
            <td>{device}</td>
            <td>{platform}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

FeedbacksTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    browser: PropTypes.string.isRequired,
    device: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
  }))
};

FeedbacksTable.defaultProps = {
  loading: false,
  error: null,
  list: [],
};

export default FeedbacksTable;
