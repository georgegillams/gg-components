import React from 'react';
import PropTypes from 'prop-types';

import Copy from '../Icons/copy';
import { cssModules } from '../helpers/cssModules';

import STYLES from './copy-button.scss';

const getClassName = cssModules(STYLES);

const CopyButton = props => {
  const { text, accessibilityLabel, className, ...rest } = props;

  const classNames = [getClassName('copy-button__outer', className)];

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      className={classNames.join(' ')}
      {...rest}
    >
      <Copy
        aria-label={accessibilityLabel || `Copy ${text}`}
        className={getClassName('copy-button__icon')}
      />
    </button>
  );
};

CopyButton.propTypes = {
  accessibilityLabel: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CopyButton.defaultProps = {
  accessibilityLabel: null,
  className: null,
};

export default CopyButton;
