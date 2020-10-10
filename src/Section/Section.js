import PropTypes from 'prop-types';
import React from 'react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './section.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Section = props => {
  const {
    link,
    padding,
    anchor,
    name,
    className,
    textClassName,
    children,
    disabled,
    hover,
    headingProps,
    ...rest
  } = props;

  const outerClassNames = [getClassName('section__outer')];
  const textClassNames = [getClassName('section__heading')];
  const anchorClassNames = [getClassName('section__anchor-link')];

  if (link) {
    textClassNames.push(getClassName('section__heading--link'));
  }
  if (hover) {
    textClassNames.push(getClassName('section__heading--hovering'));
  }
  if (anchor) {
    textClassNames.push(getClassName('section__heading--with-anchor-link'));
  }
  if (!padding) {
    textClassNames.push(getClassName('section__heading--no-padding'));
    anchorClassNames.push(getClassName('section__anchor-link--no-padding'));
  }
  if (disabled) {
    textClassNames.push(getClassName('section__heading--disabled'));
  }
  if (className) {
    outerClassNames.push(className);
  }
  if (textClassName) {
    textClassNames.push(textClassName);
  }

  const anchorLink = `${name}`
    .toLowerCase()
    .split(' ')
    .join('-');

  return (
    <div className={outerClassNames.join(' ')} {...rest}>
      {anchor && name && (
        <a
          aria-label={name}
          href={`#${anchorLink}`}
          className={anchorClassNames.join(' ')}
        >
          §
        </a>
      )}
      {name && (
        <h2
          id={anchorLink}
          className={textClassNames.join(' ')}
          {...headingProps}
        >
          {name}
        </h2>
      )}
      {children}
    </div>
  );
};

Section.propTypes = {
  anchor: PropTypes.bool,
  link: PropTypes.bool,
  padding: PropTypes.bool,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  textClassName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  headingProps: PropTypes.object,
  children: PropTypes.node,
};

Section.defaultProps = {
  anchor: false,
  link: false,
  disabled: false,
  hover: false,
  name: null,
  padding: true,
  className: null,
  textClassName: null,
  headingProps: null,
  style: null,
  children: null,
};

export default Section;
