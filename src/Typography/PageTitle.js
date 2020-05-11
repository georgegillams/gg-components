import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import TextLink from './TextLink';
import { cssModules } from '../helpers/cssModules';

import STYLES from './page-title.scss';

const getClassName = cssModules(STYLES);

const PageTitle = props => {
  const { link, headingProps, linkProps, ...rest } = props;

  const sectionClassNames = [getClassName('page-title__section')];

  if (link) {
    sectionClassNames.push(getClassName('page-title__section--with-link'));
  }

  return (
    <Fragment>
      {link && (
        <TextLink
          className={getClassName('page-title__link')}
          to={link.to}
          {...linkProps}
        >{`⇠ ${link.text}`}</TextLink>
      )}
      <Section
        headingProps={headingProps}
        textClassName={sectionClassNames.join(' ')}
        {...rest}
      />
    </Fragment>
  );
};

PageTitle.propTypes = {
  name: PropTypes.string,
  link: PropTypes.object,
};

PageTitle.defaultProps = {
  name: null,
  link: null,
};

export default PageTitle;
