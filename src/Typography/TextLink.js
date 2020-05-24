import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { cssModules } from '../helpers/cssModules';
import { NewWindow } from '../Icons';
import { THEMES } from '../Theming';

import STYLES from './typography.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const TextLink = props => {
  const {
    external,
    fancy,
    light,
    href,
    className,
    textClassName,
    children,
    onClick,
    theme,
    ...rest
  } = props;

  const classNameFinal = [getClassName('typography__main')];
  classNameFinal.push(getClassName('typography__link'));
  classNameFinal.push(getClassName('typography__link--text-link'));
  classNameFinal.push(getClassName('typography--no-padding'));
  if (light) {
    classNameFinal.push(getClassName('typography--light'));
    classNameFinal.push(getClassName('typography--light--text-link'));
  }
  if (fancy) classNameFinal.push(getClassName('typography--fancy'));
  if (theme === THEMES.allWhite) {
    classNameFinal.push(getClassName('typography__link--text-link--all-white'));
  }
  classNameFinal.push(getClassName('typography--inline'));
  if (className) {
    classNameFinal.push(className);
  }

  return external ? (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={classNameFinal.join(' ')}
      onClick={onClick}
      {...rest}
    >
      {children}
      <div className={getClassName('typography__icon')}>
        <NewWindow className={getClassName('typography__icon--inner')} />
      </div>
    </a>
  ) : (
    <Link
      to={href}
      onClick={onClick}
      className={classNameFinal.join(' ')}
      {...rest}
    >
      {children}
    </Link>
  );
};

TextLink.propTypes = {
  onClick: PropTypes.func,
  fancy: PropTypes.bool,
  external: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  textClassName: PropTypes.string,
  className: PropTypes.string,
};

TextLink.defaultProps = {
  onClick: null,
  external: false,
  fancy: false,
  light: false,
  href: null,
  children: null,
  textClassName: null,
  className: null,
};

export default TextLink;
