import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import TextLink from './TextLink';
import { cssModules } from '../helpers/cssModules';

import STYLES from './page-title.scss';

const getClassName = cssModules(STYLES);

class PageTitle extends Component {
  constructor(props) {
    super(props);

    this.sectionRef = React.createRef();
    this.linkRef = React.createRef();
    this.firstFocusDone = !props.autoFocus;
  }

  render() {
    if (!this.firstFocusDone) {
      if (this.props.link && this.linkRef && this.linkRef.current) {
        this.linkRef.current.focusLink();
        this.firstFocusDone = true;
      } else if (this.sectionRef && this.sectionRef.current) {
        this.sectionRef.current.focusTitle();
        this.firstFocusDone = true;
      }

      // Force rerenders until the focus has been achieved
      this.setState({ plzRerender: true });
    }

    const { link, ...rest } = this.props;

    const sectionClassNames = [getClassName('page-title__section')];

    if (link) {
      sectionClassNames.push(getClassName('page-title__section--with-link'));
    }

    // tabindex -1 ensures that the element is programatically focusable
    // tabindex null reverts the state to unfocusable
    return (
      <Fragment>
        {link && (
          <TextLink
            ref={this.linkRef}
            className={getClassName('page-title__link')}
            to={link.to}
          >{`⇠ ${link.text}`}</TextLink>
        )}
        <Section
          ref={this.sectionRef}
          headingProps={{ tabIndex: this.firstFocusDone ? null : -1 }}
          textClassName={sectionClassNames.join(' ')}
          {...rest}
        />
      </Fragment>
    );
  }
}

PageTitle.propTypes = {
  name: PropTypes.string,
  link: PropTypes.object,
  autoFocus: PropTypes.string,
};

PageTitle.defaultProps = {
  name: null,
  link: null,
  autoFocus: false,
};

export default PageTitle;
