import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TickSvg from './tick';
import ExclaimSvg from './exclamation-circle';
import { cssModules } from '../helpers/cssModules';

import STYLES from './input.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { hovering: false };
  }

  hoverStarted = () => {
    this.setState({ hovering: true });
  };

  hoverEnded = () => {
    this.setState({ hovering: false });
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
      ...rest
    } = this.props;

    const classNames = [getClassName('input__outer')];
    const innerClassNames = [getClassName('input__inner')];
    const iconClassNames = [getClassName('input__icon')];
    if (!enabled) {
      classNames.push(getClassName('input__outer--disabled'));
      innerClassNames.push(getClassName('input__inner--disabled'));
    }
    if (this.state.hovering && enabled) {
      classNames.push(getClassName('input__outer--hovering'));
    }
    if (className) {
      classNames.push(className);
    }

    let IconComponent = null;
    if (valid && enabled) {
      iconClassNames.push(getClassName('input__icon--valid'));
      IconComponent = TickSvg;
    }
    if (valid == false && enabled) {
      iconClassNames.push(getClassName('input__icon--invalid'));
      IconComponent = ExclaimSvg;
    }

    return (
      <div className={classNames.join(' ')} {...rest}>
        <input
          aria-valid={valid}
          aria-enabled={enabled}
          onMouseEnter={this.hoverStarted}
          onFocus={this.hoverStarted}
          onMouseLeave={this.hoverEnded}
          onBlur={this.hoverEnded}
          value={value}
          type={type}
          name={name}
          disabled={enabled === false}
          onChange={enabled ? onChange : null}
          className={innerClassNames.join(' ')}
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
  enabled: PropTypes.bool,
  iconProps: PropTypes.object,
  inputProps: PropTypes.object,
  type: PropTypes.string,
  valid: PropTypes.bool,
};

Input.defaultProps = {
  className: null,
  enabled: true,
  iconProps: null,
  inputProps: null,
  type: null,
  valid: null,
};

export default Input;
