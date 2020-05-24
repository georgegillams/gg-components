import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import Section from './Section';
import TextLink from './TextLink';
import STYLES from './page-title.scss';

const getClassName = cssModules(STYLES);

const PageTitle = props => {
  const { link, headingProps, linkProps, ...rest } = props;

  const sectionClassNames = [getClassName('page-title__section')];

  if (link) {
    sectionClassNames.push(getClassName('page-title__section--with-link'));
  }

  return (
    <>
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
};

PageTitle.defaultProps = {
  name: null,
  link: null,
  headingProps: null,
  linkProps: null,
};

export default PageTitle;
