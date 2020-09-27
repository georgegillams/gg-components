import React from 'react';
import PropTypes from 'prop-types';

import ExclamationCircle from '../Icons/ExclamationCircle';
import Tick from '../Icons/Tick';
import { cssModules } from '../helpers/cssModules';
import { Input } from '../Input';

import STYLES from './input.scss';

const OTHER_VALUE = '';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Select = props => {
  const {
    renderOtherLabel,
    otherInputId,
    name,
    value,
    onChange,
    enabled,
    enableOther,
    valid,
    options,
    inputProps,
    iconProps,
    id,
    'aria-describedby': ariaDescribedBy,
    ...rest
  } = props;

  const invalid = valid === false;
  const disabled = enabled === false;

  const showOtherFreeTextField =
    enableOther && !options.map(o => o.value).includes(value);

  const classNames = [getClassName('input__outer')];
  const innerClassNames = [
    getClassName('input__inner', 'input__inner--select'),
  ];
  const iconClassNames = [getClassName('input__icon')];
  if (disabled) {
    classNames.push(getClassName('input__outer--disabled'));
    innerClassNames.push(getClassName('input__inner--disabled'));
  }
  if (showOtherFreeTextField) {
    classNames.push(getClassName('input__outer--show-other'));
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
    <div {...rest}>
      <div className={classNames.join(' ')}>
        <select
          aria-invalid={invalid}
          aria-disabled={disabled}
          value={showOtherFreeTextField ? OTHER_VALUE : value}
          name={name}
          disabled={disabled}
          readOnly={!onChange}
          onChange={enabled ? onChange : null}
          className={innerClassNames.join(' ')}
          id={id}
          aria-describedby={ariaDescribedBy}
          {...inputProps}
        >
          {options &&
            options.map(o => (
              <option key={o.value} value={o.value}>
                {o.name}
              </option>
            ))}
          {enableOther && (
            <option key="other" value={OTHER_VALUE}>
              Other
            </option>
          )}
        </select>
        {IconComponent && (
          <IconComponent className={iconClassNames.join(' ')} {...iconProps} />
        )}
      </div>
      {showOtherFreeTextField && (
        <>
          {renderOtherLabel && renderOtherLabel()}
          <Input
            id={otherInputId}
            name={name}
            value={value}
            enabled={enabled}
            valid={valid}
            readOnly={!onChange}
            onChange={enabled ? onChange : null}
          />
        </>
      )}
    </div>
  );
};

Select.propTypes = {
  renderOtherLabel: PropTypes.func,
  otherInputId: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  'aria-describedby': PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  enabled: PropTypes.bool,
  enableOther: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  iconProps: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  inputProps: PropTypes.object,
  valid: PropTypes.bool,
};

Select.defaultProps = {
  renderOtherLabel: null,
  otherInputId: null,
  onChange: null,
  name: null,
  value: null,
  id: null,
  'aria-describedby': null,
  className: null,
  enabled: true,
  enableOther: false,
  iconProps: null,
  inputProps: null,
  valid: null,
};

export default Select;
