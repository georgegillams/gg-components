import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from '../helpers/cssModules';
import { Tick } from '../Icons';

import STYLES from './checkbox.scss';

const getClassName = cssModules(STYLES);

const Checkbox = props => {
  const {
    onChange,
    className,
    name,
    label,
    checked,
    enabled,
    valid,
    inputProps,
    ...rest
  } = props;

  const checkClassNames = [getClassName('checkbox__check')];
  const checkboxClassNames = [getClassName('checkbox__input')];
  const labelClassNames = [getClassName('checkbox__label')];
  const invalid = valid !== null && !valid;

  if (checked) {
    checkClassNames.push(getClassName('checkbox__check--checked'));
  }

  if (enabled) {
    if (valid) {
      checkClassNames.push(getClassName('checkbox__check--valid'));
      checkboxClassNames.push(getClassName('checkbox__input--valid'));
    }
    if (invalid) {
      checkClassNames.push(getClassName('checkbox__check--invalid'));
      checkboxClassNames.push(getClassName('checkbox__input--invalid'));
    }
  } else {
    checkClassNames.push(getClassName('checkbox__check--disabled'));
    checkboxClassNames.push(getClassName('checkbox__input--disabled'));
    labelClassNames.push(getClassName('checkbox__label--disabled'));
  }

  return (
    <div className={getClassName('checkbox')} {...rest}>
      <input
        className={checkboxClassNames.join(' ')}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...inputProps}
      />
      <Tick className={checkClassNames.join(' ')} />
      {label && <span className={labelClassNames.join(' ')}>{label}</span>}
    </div>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  inputProps: PropTypes.object,
  checked: PropTypes.bool,
  className: PropTypes.string,
  enabled: PropTypes.bool,
  valid: PropTypes.bool,
};

Checkbox.defaultProps = {
  inputProps: {},
  label: null,
  className: null,
  checked: false,
  enabled: true,
  valid: null,
};

export default Checkbox;