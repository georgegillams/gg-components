import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import TextLink from './TextLink';
import { cssModules } from '../helpers/cssModules';

import STYLES from './page-title.scss';

const getClassName = cssModules(STYLES);

const PageTitle = props => {
  const { link, ...rest } = props;

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
        >{`⇠ ${link.text}`}</TextLink>
      )}
      <Section textClassName={sectionClassNames.join(' ')} {...rest} />
    </Fragment>
  );
};

PageTitle.propTypes = {
  name: PropTypes.string,
};

PageTitle.defaultProps = {
  name: null,
};

export default PageTitle;
