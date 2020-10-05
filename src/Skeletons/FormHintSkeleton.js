import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import Skeleton from './Skeleton';
import STYLES from './skeleton.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const FormHintSkeleton = props => {
  const { className, ...rest } = props;

  const classNames = [getClassName('skeleton__form-hint')];
  if (className) {
    classNames.push(className);
  }

  return <Skeleton className={classNames.join(' ')} {...rest} />;
};

FormHintSkeleton.propTypes = {
  className: PropTypes.string,
};

FormHintSkeleton.defaultProps = {
  className: null,
};

export default FormHintSkeleton;
