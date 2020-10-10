import PropTypes from 'prop-types';
import React from 'react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './article-date.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const ArticleDate = props => {
  const { date, padding, className, ...rest } = props;

  const classNames = [getClassName('article-date__date')];
  if (!padding) {
    classNames.push(getClassName('article-date__date--no-padding'));
  }
  if (className) {
    classNames.push(className);
  }

  return (
    <span
      style={{ fontStyle: 'italic' }}
      className={classNames.join(' ')}
      {...rest}
    >
      Published {date && date.toString()}
    </span>
  );
};

ArticleDate.propTypes = {
  date: PropTypes.number.isRequired,
  className: PropTypes.string,
  padding: PropTypes.bool,
};

ArticleDate.defaultProps = {
  className: null,
  padding: true,
};

export default ArticleDate;
