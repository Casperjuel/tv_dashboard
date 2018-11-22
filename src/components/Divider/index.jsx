import React from 'react';
import PropTypes from 'prop-types';
import style from './divider.css';

const Divider = ({ promoted }) => (
  <div className={promoted ? style.promoted : style.base} />
);

Divider.propTypes = {
  promoted: PropTypes.bool,
};

export default Divider;
