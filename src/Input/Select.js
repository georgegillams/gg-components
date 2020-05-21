import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tick, ExclamationCircle } from '../Icons';
import { cssModules } from '../helpers/cssModules';

import Input from './Input';
import STYLES from './input.scss';

const OTHER_VALUE = '';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = { hovering: false, focused: false };
  }

  hoverStarted = () => {
    this.setState({ hovering: true });
  };

  hoverEnded = () => {
    this.setState({ hovering: false });
  };

  focusStarted = () => {
    this.setState({ focused: true });
  };

  focusEnded = () => {
    this.setState({ focused: false });
  };

  render = () => {
    const {
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
      ...rest
    } = this.props;

    const invalid = valid === false;
    const disabled = enabled === false;
    const focusedState = this.state.hovering || this.state.focused;

    const classNames = [getClassName('input__outer')];
    const innerClassNames = [
      getClassName('input__inner', 'input__inner--select'),
    ];
    const iconClassNames = [getClassName('input__icon')];
    if (disabled) {
      classNames.push(getClassName('input__outer--disabled'));
      innerClassNames.push(getClassName('input__inner--disabled'));
    }
    if (focusedState && enabled) {
      classNames.push(getClassName('input__outer--hovering'));
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

    const showOtherFreeTextField =
      enableOther && !options.map(o => o.value).includes(value);

    return (
      <div {...rest}>
        <div className={classNames.join(' ')}>
          <select
            aria-invalid={invalid}
            aria-disabled={disabled}
            onMouseEnter={this.hoverStarted}
            onFocus={this.focusStarted}
            onMouseLeave={this.hoverEnded}
            onBlur={this.focusEnded}
            value={showOtherFreeTextField ? OTHER_VALUE : value}
            name={name}
            disabled={disabled}
            readOnly={!onChange}
            onChange={enabled ? onChange : null}
            className={innerClassNames.join(' ')}
            id={id}
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
            <IconComponent
              className={iconClassNames.join(' ')}
              {...iconProps}
            />
          )}
        </div>
        {showOtherFreeTextField && (
          <Input
            style={{ marginTop: '1rem' }}
            name={name}
            value={value}
            enabled={enabled}
            valid={valid}
            readOnly={!onChange}
            onChange={enabled ? onChange : null}
          />
        )}
      </div>
    );
  };
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
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
  onChange: null,
  name: null,
  value: null,
  id: null,
  className: null,
  enabled: true,
  enableOther: false,
  iconProps: null,
  inputProps: null,
  valid: null,
};

export default Select;
