import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import TextLink from './TextLink';
import { cssModules } from '../helpers/cssModules';

import STYLES from './page-title.scss';

const getClassName = cssModules(STYLES);

class PageTitle extends Component {
  componentDidMount() {
    this.firstFocus.focus();
  }

  render() {
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
        <Section
          ref={ref => {
            this.firstFocus = ref;
          }}
          textClassName={sectionClassNames.join(' ')}
          {...rest}
        />
      </Fragment>
    );
  }
}

PageTitle.propTypes = {
  name: PropTypes.string,
};

PageTitle.defaultProps = {
  name: null,
};

export default PageTitle;
