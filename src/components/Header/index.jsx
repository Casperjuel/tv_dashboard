import React from 'react';
import PropTypes from 'prop-types';
import style from './header.css';

const Header = ({ title, logo }) => (
  <header className={style.header}>
    <img className={style.logo} alt="logo" src={logo} />
    <h1 className={style.title}>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
};

export default Header;
