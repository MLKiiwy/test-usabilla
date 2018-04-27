import React from 'react';
import PropTypes from 'prop-types';
import RoundedButton from '../RoundedButton/RoundedButton'
import style from './style.scss';

function TableHeaderBar({ onCommentFilterChange, onRatingFilterChange, onPageChange, maxRating, activeRatings, count, perPage, actualPage }) {
  const ratings = [];
  for (let i = 0; i < maxRating; i += 1) {
    ratings.push(i + 1);
  }
  const countPage = Math.ceil(count / perPage);
  const pages = [];
  for (let i = 1; i <= countPage; i += 1) {
    pages.push(i);
  }

  return (
    <div className='tableHeaderBar'>
      <div className='commentFilter'>
        <input type="text" placeholder="Search ..." onChange={e => onCommentFilterChange(e.currentTarget.value)} />
      </div>
      <div className='ratingFilter'>
        {ratings.map(rating => (
          <RoundedButton
            label={rating}
            active={activeRatings.indexOf(rating) !== -1}
            onClick={onRatingFilterChange}
          />
        ))}
      </div>
      <div className='pagination'>
        <span className='count'>Count: {count}</span>
        <span>Page: </span>
        <select onChange={e => onPageChange(parseInt(e.currentTarget.value, 10))}>
          {pages.map(page => (
            <option value={page} selected={page === actualPage}>{page}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

TableHeaderBar.propTypes = {
  onCommentFilterChange: PropTypes.func.isRequired,
  onRatingFilterChange: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  maxRating: PropTypes.number,
  activeRatings: PropTypes.arrayOf(PropTypes.number).isRequired,
  count: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  actualPage: PropTypes.number.isRequired
};

TableHeaderBar.defaultProps = {
  maxRating: 5,
  perPage: 10,
};

export default TableHeaderBar;
