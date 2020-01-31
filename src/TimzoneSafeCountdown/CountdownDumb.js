import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from '../helpers/cssModules';

import STYLES from './countdown.scss';

const getClassName = cssModules(STYLES);

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

const CountdownDumb = props => {
  const { millis, className, completeMessage, large, ...rest } = props;

  const classNames = [getClassName('countdown__outer', className)];

  if (millis <= 0 && completeMessage) {
    return <p>{completeMessage}</p>;
  }

  const absFloor = num => {
    if (num > 0) {
      return Math.floor(num);
    }
    return Math.ceil(num);
  };

  let msLeft = millis;
  const daysLeft = absFloor(msLeft / MS_PER_DAY);
  msLeft -= daysLeft * MS_PER_DAY;
  const hoursLeft = absFloor(msLeft / MS_PER_HOUR);
  msLeft -= hoursLeft * MS_PER_HOUR;
  const minutesLeft = absFloor(msLeft / MS_PER_MINUTE);
  msLeft -= minutesLeft * MS_PER_MINUTE;
  const secondsLeft = absFloor(msLeft / MS_PER_SECOND);
  msLeft -= secondsLeft * MS_PER_SECOND;

  return (
    <div className={classNames.join(' ')} {...rest}>
      {daysLeft !== 0 && <p>DAYS: {daysLeft}</p>}
      <p>HOURS: {hoursLeft}</p>
      <p>MINUTES: {minutesLeft}</p>
      <p>SECONDS: {secondsLeft}</p>
    </div>
  );
};

CountdownDumb.propTypes = {
  millis: PropTypes.string.isRequired,
  className: PropTypes.string,
  completeMessage: PropTypes.string,
  large: PropTypes.bool,
};

CountdownDumb.defaultProps = {
  className: null,
  completeMessage: null,
  large: false,
};

export default CountdownDumb;
