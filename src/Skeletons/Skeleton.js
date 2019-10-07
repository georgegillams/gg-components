import React, { Component } from 'react';
import { cssModules } from '../helpers/cssModules';

import STYLES from './skeleton.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

class Skeleton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 0,
    };
  }

  adjustPositionsToAlign = () => {
    const left = this.divElement.getBoundingClientRect().x;
    this.setState({ left });
  };

  componentDidMount() {
    this.adjustPositionsToAlign();
    self.interval = setInterval(() => {
      this.adjustPositionsToAlign();
    }, 2000);
  }

  componentWillUnmount() {
    if (this.interval) {
      this.interval = null;
    }
  }

  render() {
    const { className, ...rest } = this.props;

    const classNames = [getClassName('skeleton__outer')];
    if (className) {
      classNames.push(className);
    }

    return (
      <div
        className={classNames.join(' ')}
        ref={divElement => (this.divElement = divElement)}
        {...rest}
      >
        <div
          className={getClassName('skeleton__shimmer')}
          style={{ marginLeft: `-${this.state.left}px` }}
        />
      </div>
    );
  }
}

export default Skeleton;
