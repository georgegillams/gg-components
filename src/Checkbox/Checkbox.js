import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import Tick from '../Icons/Tick';

import STYLES from './checkbox.scss';

const getClassName = cssModules(STYLES);

const Checkbox = props => {
  const {
    onChange,
    labelClassName,
    className,
    name,
    label,
    checked,
    disabled,
    valid,
    inputProps,
    ...rest
  } = props;

  const enabled = disabled !== true;
  const invalid = valid === false;

  const checkClassNames = [getClassName('checkbox__check')];
  const checkboxClassNames = [getClassName('checkbox__input')];
  const labelClassNames = [getClassName('checkbox__label', labelClassName)];

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
    <label className={getClassName('checkbox', className)} {...rest}>
      <div className={getClassName('checkbox__input-wrapper')}>
        <input
          aria-invalid={invalid}
          aria-disabled={disabled ? true : null}
          aria-label={label}
          className={checkboxClassNames.join(' ')}
          name={name}
          type="checkbox"
          checked={checked}
          readOnly={!onChange}
          onChange={enabled ? onChange : null}
          disabled={disabled}
          {...inputProps}
        />
        <Tick className={checkClassNames.join(' ')} />
      </div>
      <span aria-hidden="true" className={labelClassNames.join(' ')}>
        {label}{' '}
      </span>
    </label>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  checked: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
};

Checkbox.defaultProps = {
  onChange: null,
  inputProps: {},
  className: null,
  labelClassName: null,
  checked: false,
  disabled: false,
  valid: null,
};

export default Checkbox;
