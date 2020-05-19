import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { cssModules } from '../helpers/cssModules';

import STYLES from './gg-button.scss';

const getClassName = cssModules(STYLES);

const Button = props => {
  const [
    showDestructiveConfirmation,
    setShowDestructiveConfirmation,
  ] = useState(false);

  const {
    href,
    hrefExternal,
    destructive,
    disabled,
    light,
    bouncy,
    onClick,
    className,
    buttonClassName,
    large,
    children,
    secondary,
    white,
    ...rest
  } = props;

  const classNameFinal = [getClassName('button__outer')];
  if (!destructive && !bouncy) {
    classNameFinal.push(getClassName('button__outer--regular'));
  }
  if (destructive) {
    classNameFinal.push(getClassName('button__outer--destructive'));
  }
  if (bouncy) {
    if (!light) {
      classNameFinal.push(getClassName('button__outer--dark-text'));
    }
    classNameFinal.push(getClassName('button__outer--bouncy'));
    if (destructive) {
      classNameFinal.push(getClassName('button__outer--bouncy--destructive'));
    }
    if (disabled) {
      classNameFinal.push(getClassName('button__outer--disabled'));
    }
  } else {
    classNameFinal.push(getClassName('button__outer--no-bouncy'));
    if (destructive) {
      classNameFinal.push(
        getClassName('button__outer--no-bouncy--destructive'),
      );
    }
    if (disabled) {
      classNameFinal.push(getClassName('button__outer--disabled'));
    }
  }
  if (large) {
    classNameFinal.push(getClassName('button__outer--large'));
  }
  if (secondary) {
    classNameFinal.push(getClassName('button__outer--secondary'));
  }

  if (white) {
    classNameFinal.push(getClassName('button__outer--white'));
  }

  if (buttonClassName) classNameFinal.push(buttonClassName);

  if (className) classNameFinal.push(className);

  if (href && !hrefExternal && !disabled) {
    return (
      <Link aria-label={children} to={href} onClick={onClick} {...rest}>
        <button
          aria-hidden="true"
          type="button"
          className={classNameFinal.join(' ')}
        >
          {children}
        </button>
      </Link>
    );
  }

  let onClickFinal = onClick;
  if (disabled) {
    onClickFinal = null;
  } else if (href && hrefExternal) {
    onClickFinal = () => {
      window.open(href, '_blank');
    };
  }

  const onDestructiveClickFinal = event => {
    if (showDestructiveConfirmation) {
      setShowDestructiveConfirmation(false);
      onClickFinal(event);
    } else {
      setShowDestructiveConfirmation(true);
      setTimeout(() => {
        setShowDestructiveConfirmation(false);
      }, 7500);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={destructive ? onDestructiveClickFinal : onClickFinal}
      className={classNameFinal.join(' ')}
      {...rest}
    >
      {showDestructiveConfirmation && 'Click again to confirm '}
      {children}
    </button>
  );
};

Button.propTypes = {
  large: PropTypes.bool,
  href: PropTypes.string,
  hrefExternal: PropTypes.bool,
  buttonClassName: PropTypes.string,
  secondary: PropTypes.bool,
  white: PropTypes.bool,
  disabled: PropTypes.bool,
  light: PropTypes.bool,
  bouncy: PropTypes.bool,
  destructive: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  large: false,
  href: null,
  buttonClassName: null,
  hrefExternal: false,
  secondary: false,
  white: false,
  light: false,
  disabled: false,
  bouncy: false,
  destructive: false,
  onClick: null,
  className: null,
  children: null,
};

export default Button;
