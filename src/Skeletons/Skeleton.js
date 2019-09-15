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

  componentDidMount() {
    console.log(`this.divElement`, this.divElement);
    const left = this.divElement.getBoundingClientRect().x;
    this.setState({ left });
  }

  render() {
    const { className, ...rest } = this.props;

    const classNames = [getClassName('skeleton__outer')];
    if (className) {
      classNames.push(className);
    }

    console.log(`left`, this.state.left);

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
