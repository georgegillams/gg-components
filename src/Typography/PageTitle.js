import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import Section from './Section';
import TextLink from './TextLink';
import STYLES from './page-title.scss';

const getClassName = cssModules(STYLES);

const PageTitle = props => {
  const {
    link,
    linkWrapperComponent: LinkWrapperComponent,
    headingProps,
    linkProps,
    ...rest
  } = props;

  const sectionClassNames = [getClassName('page-title__section')];

  if (link) {
    sectionClassNames.push(getClassName('page-title__section--with-link'));
  }

  let linkElement = null;
  if (link) {
    linkElement = (
      <TextLink
        className={getClassName('page-title__link')}
        href={link.to}
        hrefDumb={!!LinkWrapperComponent}
        {...linkProps}
      >{`⇠ ${link.text}`}</TextLink>
    );

    if (LinkWrapperComponent) {
      linkElement = <LinkWrapperComponent>{linkElement}</LinkWrapperComponent>;
    }
  }

  return (
    <>
      {link && linkElement}
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
  linkWrapperComponent: PropTypes.element,
};

PageTitle.defaultProps = {
  name: null,
  link: null,
  headingProps: null,
  linkProps: null,
  linkWrapperComponent: null,
};

export default PageTitle;
