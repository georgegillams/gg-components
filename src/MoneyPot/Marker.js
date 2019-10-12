import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Progress } from '../Progress';
import { cssModules } from '../helpers/cssModules';

import STYLES from './marker.scss';

const getClassName = cssModules(STYLES);

class Marker extends Component {
  constructor(props) {
    super(props);

    this.state = { showPopover: false };
  }

  render() {
    const { displayPercentage, hoverText, className, ...rest } = this.props;

    const classNames = [getClassName('marker__outer')];
    if (className) {
      classNames.push(className);
    }

    const setHover = newValue => {
      this.setState({ showPopover: newValue });
    };

    const hoverStarted = () => {
      setHover(true);
    };

    const hoverEnded = () => {
      setHover(false);
    };

    return (
      <div
        className={classNames.join(' ')}
        style={{
          marginLeft: `calc(${displayPercentage}% - 1rem)`,
        }}
        onMouseEnter={hoverStarted}
        onFocus={hoverStarted}
        onMouseLeave={hoverEnded}
        onBlur={hoverEnded}
        onClick={hoverStarted}
        {...rest}
      >
        {this.state.showPopover && (
          <div className={getClassName('marker__popover')}>
            <div className={getClassName('marker__popover--label')}>
              {hoverText}
            </div>
          </div>
        )}
        <div className={getClassName('marker__inner')} />
      </div>
    );
  }
}

Marker.propTypes = {
  name: PropTypes.string.isRequired,
  shortfall: PropTypes.number,
  balance: PropTypes.number,
  goalAmount: PropTypes.number,
  filled: PropTypes.bool,
  className: PropTypes.string,
  markerPosition: PropTypes.number,
};

Marker.defaultProps = {
  filled: true,
  shortfall: null,
  balance: null,
  goalAmount: null,
  className: null,
  markerPosition: null,
};

export default Marker;
