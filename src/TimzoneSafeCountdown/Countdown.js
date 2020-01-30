import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from '../helpers/cssModules';

import STYLES from './countdown.scss';

const getClassName = cssModules(STYLES);

class Countdown extends Component {
  static propTypes = {
    large: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    large: false,
    className: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => {
    const {
      className,
      large,
      ...rest
    } = this.props;

    const classNames = [getClassName('countdown__outer', className)];

    return (
      <div
        className={classNames.join(' ')}
        {...rest}
      >
        {COUNTDOWN HERE}
      </div>
    );
  };
}

export default Countdown;
