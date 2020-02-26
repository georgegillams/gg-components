import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tick, ExclaimationCircle } from '../Icons';
import { cssModules } from '../helpers/cssModules';

import STYLES from './input.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

class Input extends Component {
  constructor(props) {
    super(props);

    this.InputComponent = props.component;
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
      type,
      valid,
      className,
      inputProps,
      iconProps,
      component,
      id,
      ...rest
    } = this.props;

    const focusedState = this.state.hovering || this.state.focused;

    const classNames = [getClassName('input__outer')];
    const innerClassNames = [getClassName('input__inner')];
    const iconClassNames = [getClassName('input__icon')];
    if (!enabled) {
      classNames.push(getClassName('input__outer--disabled'));
      innerClassNames.push(getClassName('input__inner--disabled'));
    }
    if (focusedState && enabled) {
      classNames.push(getClassName('input__outer--hovering'));
    }
    if (className) {
      classNames.push(className);
    }

    let IconComponent = null;
    if (valid && enabled) {
      iconClassNames.push(getClassName('input__icon--valid'));
      IconComponent = Tick;
    }
    if (valid == false && enabled) {
      iconClassNames.push(getClassName('input__icon--invalid'));
      IconComponent = ExclaimationCircle;
    }

    return (
      <div className={classNames.join(' ')} {...rest}>
        <this.InputComponent
          aria-valid={valid}
          aria-enabled={enabled}
          onMouseEnter={this.hoverStarted}
          onFocus={this.focusStarted}
          onMouseLeave={this.hoverEnded}
          onBlur={this.focusEnded}
          value={value}
          type={type}
          name={name}
          disabled={enabled === false}
          onChange={enabled ? onChange : null}
          className={innerClassNames.join(' ')}
          id={id}
          {...inputProps}
        />
        {IconComponent && (
          <IconComponent className={iconClassNames.join(' ')} {...iconProps} />
        )}
      </div>
    );
  };
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  component: PropTypes.func,
  enabled: PropTypes.bool,
  iconProps: PropTypes.object,
  inputProps: PropTypes.object,
  type: PropTypes.string,
  valid: PropTypes.bool,
};

Input.defaultProps = {
  className: null,
  component: iProps => <input {...iProps} />,
  enabled: true,
  iconProps: null,
  inputProps: null,
  type: null,
  valid: null,
};

export default Input;
