import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from '../helpers/cssModules';

import STYLES from './typography.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Paragraph = props => {
  const { className, children, ...rest } = props;

  return (
    <span
      className={getClassName(
        'typography__main',
        'typography__paragraph',
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  children: null,
  className: null,
};

export default Paragraph;
