import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import { THEMES } from '../Theming';

import STYLES from './paragraph.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Paragraph = props => {
  const { className, children, theme, ...rest } = props;

  const themeClassName =
    theme === THEMES.allWhite ? getClassName('paragraph--all-white') : null;

  return (
    <span
      className={getClassName('paragraph', themeClassName, className)}
      {...rest}
    >
      {children}
    </span>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.string,
};

Paragraph.defaultProps = {
  children: null,
  className: null,
  theme: null,
};

export default Paragraph;
