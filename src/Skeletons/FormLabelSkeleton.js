import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import Skeleton from './Skeleton';
import STYLES from './skeleton.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const FormLabelSkeleton = props => {
  const { className, ...rest } = props;

  const classNames = [getClassName('skeleton__form-label')];
  if (className) {
    classNames.push(className);
  }

  return <Skeleton className={classNames.join(' ')} {...rest} />;
};

FormLabelSkeleton.propTypes = {
  className: PropTypes.string,
};

FormLabelSkeleton.defaultProps = {
  className: null,
};

export default FormLabelSkeleton;
