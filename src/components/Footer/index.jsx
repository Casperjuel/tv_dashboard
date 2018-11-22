import React from 'react';
import PropTypes from 'prop-types';
import style from './footer.css';

const Footer = ({ loggedIn }) => (
  <div className={loggedIn ? style.loggedIn : style.base}>Footer</div>
);

Footer.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Footer;
