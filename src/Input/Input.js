import React from 'react';
import PropTypes from 'prop-types';

import Tick from '../Icons/Tick';
import ExclamationCircle from '../Icons/ExclamationCircle';
import { cssModules } from '../helpers/cssModules';

import STYLES from './input.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Input = props => {
  const {
    name,
    value,
    onChange,
    enabled,
    type,
    valid,
    className,
    inputProps,
    iconProps,
    component: InputComponent,
    id,
    'aria-describedby': ariaDescribedby,
    ...rest
  } = props;

  const disabled = enabled === false;
  const invalid = valid === false;

  const classNames = [getClassName('input__outer')];
  const innerClassNames = [getClassName('input__inner')];
  const iconClassNames = [getClassName('input__icon')];
  if (disabled) {
    classNames.push(getClassName('input__outer--disabled'));
    innerClassNames.push(getClassName('input__inner--disabled'));
  }
  if (className) {
    classNames.push(className);
  }

  let IconComponent = null;
  if (valid && enabled) {
    iconClassNames.push(getClassName('input__icon--valid'));
    IconComponent = Tick;
  }
  if (valid === false && enabled) {
    iconClassNames.push(getClassName('input__icon--invalid'));
    IconComponent = ExclamationCircle;
  }

  return (
    <div className={classNames.join(' ')} {...rest}>
      <InputComponent
        aria-invalid={invalid}
        aria-disabled={disabled}
        value={value || ''}
        type={type}
        name={name}
        disabled={disabled}
        readOnly={!onChange}
        onChange={enabled ? onChange : null}
        className={innerClassNames.join(' ')}
        id={id}
        aria-describedby={ariaDescribedby}
        {...inputProps}
      />
      {IconComponent && (
        <IconComponent className={iconClassNames.join(' ')} {...iconProps} />
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  'aria-describedby': PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  component: PropTypes.func,
  enabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  iconProps: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  type: PropTypes.string,
  valid: PropTypes.bool,
};

Input.defaultProps = {
  id: null,
  'aria-describedby': null,
  value: null,
  name: null,
  onChange: null,
  className: null,
  component: iProps => <input {...iProps} />,
  enabled: true,
  iconProps: null,
  inputProps: null,
  type: null,
  valid: null,
};

export default Input;
