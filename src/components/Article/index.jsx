import React from 'react';
import PropTypes from 'prop-types';
import style from './article.css';
import { getPercentageChange } from '../../helpers';

const Article = ({ value, title, before, symbol, negative }) => {
  const article = null;

  const difference = getPercentageChange(before, value);

  const direction = Math.sign(difference);

  const statusColor = {
    '--status-color':
      direction === -1 ? 'var(--brand-red)' : 'var(--brand-green)',
  };

  return (
    <article className={style.article} style={statusColor}>
      <div className={style.symbol}>
        <span className={style.symbolSpan}>{`${difference.toFixed(1)}%`}</span>
      </div>
      <div className={style.indicatorWrapper}>
        <span className={style.indicator} />
        <span className={style.indicator} />
      </div>
      <div className={style.values}>
        <span className={style.title}>{title}</span>
        <h2 className={style.value}>
          {`${value} ${symbol === '%' ? '%' : ''}`}
        </h2>
        <span className={style.difference}>
          {'Previous: '}
          {`${before} ${symbol === '%' ? '%' : ''}`}
        </span>
      </div>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
  negative: PropTypes.bool,
};

export default Article;
