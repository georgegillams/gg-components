import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import { TextLink } from '../TextLink';

import STYLES from './page-title.scss';

const getClassName = cssModules(STYLES);

const PageTitle = props => {
  const {
    padding,
    link,
    renderLink,
    name,
    linkProps,
    children,
    className,
    ...rest
  } = props;

  const sectionClassNames = [getClassName('page-title__heading')];
  const linkClassNames = [getClassName('page-title__link')];

  if (link) {
    sectionClassNames.push(getClassName('page-title__heading--with-link'));
  }

  if (!padding) {
    sectionClassNames.push(getClassName('page-title__heading--no-padding'));
    linkClassNames.push(getClassName('page-title__link--no-padding'));
  }
  if (className) {
    sectionClassNames.push(className);
  }

  let linkElement = null;
  if (link) {
    const linkHref = link.to;
    const linkText = `⇠ ${link.text}`;

    if (renderLink) {
      linkElement = renderLink(linkHref, linkText, linkClassNames.join(' '));
    } else {
      linkElement = (
        <TextLink
          className={linkClassNames.join(' ')}
          href={linkHref}
          {...linkProps}
        >
          {linkText}
        </TextLink>
      );
    }
  }

  return (
    <>
      {linkElement && linkElement}
      {name && (
        <h1 className={sectionClassNames.join(' ')} {...rest}>
          {name}
        </h1>
      )}
      {children}
    </>
  );
};

PageTitle.propTypes = {
  padding: PropTypes.bool,
  name: PropTypes.string,
  link: PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  linkProps: PropTypes.object,
  renderLink: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.node,
  className: PropTypes.string,
};

PageTitle.defaultProps = {
  padding: true,
  name: null,
  link: null,
  linkProps: null,
  renderLink: null,
  children: null,
  className: null,
};

export default PageTitle;
