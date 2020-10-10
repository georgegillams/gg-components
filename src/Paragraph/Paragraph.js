import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './paragraph.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Paragraph = props => {
  const { className, children, padding, ...rest } = props;

  const classNames = [getClassName('paragraph')];
  if (!padding) {
    classNames.push(getClassName('paragraph--no-padding'));
  }
  if (className) {
    classNames.push(className);
  }

  return (
    <span className={classNames.join(' ')} {...rest}>
      {children}
    </span>
  );
};

Paragraph.propTypes = {
  padding: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  padding: true,
  children: null,
  className: null,
};

export default Paragraph;
