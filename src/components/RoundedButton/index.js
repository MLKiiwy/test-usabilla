import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function RoundedButton({ rating, onClick, active }) {
  let className;
  if (onClick === null) {
    className = 'rounded label';
  } else {
    className = active ? 'rounded active' : 'rounded';
  }
  return (
    <button
      className={className}
      disabled={onClick === null}
      onClick={() => onClick(rating, !active)}
    >
      {rating}
    </button>
  );
}

RoundedButton.propTypes = {
  rating: PropTypes.number,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

RoundedButton.defaultProps = {
  rating: 0,
  onClick: null,
  active: false,
};

export default RoundedButton;
