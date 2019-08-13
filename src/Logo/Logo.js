import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cssModules } from '../helpers/cssModules';

import STYLES from './logo.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Logo = props => {
  const {
    noPadding,
    animated,
    small,
    className,
    alwaysCentered,
    light,
    ...rest
  } = props;
  const classNameFinal = [getClassName('logo__container')];
  if (className) {
    classNameFinal.push(className);
  }
  if (alwaysCentered) {
    classNameFinal.push(getClassName('logo__container--centered'));
  }

  const baseTextClassNameFinal = [getClassName('logo__subheading')];
  const largeTextClassNameFinal = [getClassName('logo__heading')];
  if (animated) {
    baseTextClassNameFinal.push(getClassName('logo__subheading--animated'));
    largeTextClassNameFinal.push(getClassName('logo__subheading--animated'));
  }
  if (light) {
    baseTextClassNameFinal.push(getClassName('logo__subheading--light'));
  }

  if (small) {
    largeTextClassNameFinal.push(getClassName('logo__heading--smaller'));
  }
  if (noPadding) {
    classNameFinal.push(getClassName('logo__container--no-padding'));
    largeTextClassNameFinal.push(getClassName('logo__heading--no-padding'));
    baseTextClassNameFinal.push(getClassName('logo__subheading--no-padding'));
  }

  return (
    <div className={classNameFinal.join(' ')} {...rest}>
      <Link role="button" aria-label="Home page" to="/">
        <h1 textStyle="xxl" className={largeTextClassNameFinal.join(' ')}>
          {'<G/>'}
        </h1>
        {!small && (
          <div>
            <br />
            <br />
            <h2 textStyle="lg" className={baseTextClassNameFinal.join(' ')}>
              {'George Gillams'}
            </h2>
          </div>
        )}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  noPadding: PropTypes.bool,
  animated: PropTypes.bool,
  small: PropTypes.bool,
  light: PropTypes.bool,
  alwaysCentered: PropTypes.bool,
};

Logo.defaultProps = {
  className: null,
  noPadding: false,
  animated: false,
  small: false,
  light: false,
  alwaysCentered: false,
};

export default Logo;
