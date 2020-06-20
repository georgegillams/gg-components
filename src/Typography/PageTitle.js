import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import Section from './Section';
import TextLink from './TextLink';
import STYLES from './page-title.scss';

const getClassName = cssModules(STYLES);

const PageTitle = props => {
  const { link, renderLink, headingProps, linkProps, ...rest } = props;

  const sectionClassNames = [getClassName('page-title__section')];

  if (link) {
    sectionClassNames.push(getClassName('page-title__section--with-link'));
  }

  let linkElement = null;
  if (link) {
    if (renderLink) {
      linkElement = renderLink(
        `⇠ ${link.text}`,
        link.text,
        getClassName('page-title__link'),
      );
    } else {
      linkElement = (
        <TextLink
          className={getClassName('page-title__link')}
          href={link.to}
          hrefDumb={!!renderLink}
          {...linkProps}
        >{`⇠ ${link.text}`}</TextLink>
      );
    }
  }

  return (
    <>
      {linkElement && linkElement}
      <Section
        headingProps={headingProps}
        textClassName={sectionClassNames.join(' ')}
        {...rest}
      />
    </>
  );
};

PageTitle.propTypes = {
  name: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  link: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  headingProps: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  linkProps: PropTypes.object,
  renderLink: PropTypes.func,
};

PageTitle.defaultProps = {
  name: null,
  link: null,
  headingProps: null,
  linkProps: null,
  renderLink: null,
};

export default PageTitle;
