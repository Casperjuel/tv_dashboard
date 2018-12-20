import React from 'react';
import style from './footer.css';
import Clock from './Clock';

const Footer = () => (
  <div className={style.footer}>
    <Clock className={style.Clock} />
  </div>
);

export default Footer;
