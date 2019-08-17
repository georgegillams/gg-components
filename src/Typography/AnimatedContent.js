import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from '../helpers/cssModules';

import STYLES from './animated-content.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

class AnimatedContent extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    inView: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    inView: true,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { inView, className, children, ...rest } = this.props;
    const classNameFinal = [getClassName('animated-content__outer-container')];
    if (inView) {
      classNameFinal.push(
        getClassName('animated-content__outer-container--in-view'),
      );
    }
    if (className) {
      classNameFinal.push(className);
    }

    return (
      <div className={classNameFinal.join(' ')} {...rest}>
        {children}
      </div>
    );
  }
}

export default AnimatedContent;
