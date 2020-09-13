import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './icon.scss';

const getClassName = cssModules(STYLES);

const ExclamationCircle = props => {
  const { className, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className={getClassName('icon', className)}
      {...rest}
    >
      <path d="M4.287 7.8a1 1 0 0 1 1.414 0l6.293 6.292L18.287 7.8a1 1 0 1 1 1.438 1.39l-.024.024-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z" />
    </svg>
  );
};

ExclamationCircle.propTypes = {
  className: PropTypes.string,
};

ExclamationCircle.defaultProps = {
  className: null,
};

export default ExclamationCircle;
