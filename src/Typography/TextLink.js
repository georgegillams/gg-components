import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import { NewWindow } from '../Icons';
import { THEMES } from '../Theming';

import STYLES from './typography.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const TextLink = props => {
  const {
    fancy,
    light,
    href,
    hrefExternal,
    hrefDumb,
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

  return (
    <a
      href={hrefDumb ? null : href}
      rel={hrefExternal ? 'noopener noreferrer' : null}
      target={hrefExternal ? '_blank' : null}
      className={classNameFinal.join(' ')}
      onClick={onClick}
      {...rest}
    >
      {children}
      {hrefExternal && (
        <div className={getClassName('typography__icon')}>
          <NewWindow className={getClassName('typography__icon--inner')} />
        </div>
      )}
    </a>
  );
};

TextLink.propTypes = {
  onClick: PropTypes.func,
  fancy: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  hrefExternal: PropTypes.bool,
  hrefDumb: PropTypes.bool,
  textClassName: PropTypes.string,
  className: PropTypes.string,
};

TextLink.defaultProps = {
  onClick: null,
  fancy: false,
  light: false,
  href: null,
  hrefExternal: false,
  hrefDumb: false,
  children: null,
  textClassName: null,
  className: null,
};

export default TextLink;
