import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function RoundedButton({ label, onClick, active }) {
  let className;
  if (onClick === null) {
    className = 'rounded label';
  } else {
    className = active ? 'rounded active' : 'rounded';
  }
  return (
    <button className={className} disabled={onClick === null} onClick={() => onClick(label, !active)}>
      {label}
    </button>
  );
}

RoundedButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

RoundedButton.defaultProps = {
  label: '0',
  onClick: null,
  active: false,
};

export default RoundedButton;
