import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from '../helpers/cssModules';
import { getTimeDifferenceFromMillis } from '../helpers/time';
import { Paragraph } from '../Typography';

import STYLES from './countdown.scss';
import CountdownItem from './CountdownItem';
import CountdownDivider from './CountdownDivider';

const getClassName = cssModules(STYLES);

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

const CountdownDumb = props => {
  const {
    millis,
    textClassName,
    className,
    completeMessage,
    large,
    paused,
    ...rest
  } = props;

  const classNames = [getClassName('countdown__outer', className)];

  if (millis <= 0 && completeMessage) {
    classNames.push(getClassName('countdown__pausedLabel'));
    if (textClassName) {
      classNames.push(textClassName);
    }
    return (
      <Paragraph className={classNames.join(' ')}>{completeMessage}</Paragraph>
    );
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

  const timeDifferenceFriendly = getTimeDifferenceFromMillis(millis);
  let accessibleLabel = `Timer ends ${timeDifferenceFriendly}`;
  if (millis <= 0) {
    accessibleLabel = `Timer ended ${timeDifferenceFriendly}`;
  }

  if (paused) {
    classNames.push(getClassName('countdown__pausedLabel'));
    if (textClassName) {
      classNames.push(textClassName);
    }
    return (
      <Paragraph className={classNames.join(' ')}>{accessibleLabel}</Paragraph>
    );
  }

  return (
    <div
      role="paragraph"
      aria-label={accessibleLabel}
      className={classNames.join(' ')}
      {...rest}
    >
      {millis <= 0 && (
        <Paragraph
          className={[
            getClassName('countdown__itemNumber'),
            textClassName,
          ].join(' ')}
        >
          -
        </Paragraph>
      )}
      {daysLeft !== 0 && (
        <Fragment>
          <CountdownItem
            textClassName={textClassName}
            name="DAYS"
            number={Math.abs(daysLeft)}
          />
          <CountdownDivider textClassName={textClassName} />
        </Fragment>
      )}
      <CountdownItem
        textClassName={textClassName}
        name="HOURS"
        number={Math.abs(hoursLeft)}
      />
      <CountdownDivider textClassName={textClassName} />
      <CountdownItem
        textClassName={textClassName}
        name="MINUTES"
        number={Math.abs(minutesLeft)}
      />
      <CountdownDivider textClassName={textClassName} />
      <CountdownItem
        textClassName={textClassName}
        name="SECONDS"
        number={Math.abs(secondsLeft)}
      />
    </div>
  );
};

CountdownDumb.propTypes = {
  millis: PropTypes.string.isRequired,
  className: PropTypes.string,
  completeMessage: PropTypes.string,
  large: PropTypes.bool,
  paused: PropTypes.bool,
};

CountdownDumb.defaultProps = {
  className: null,
  completeMessage: null,
  large: false,
  paused: false,
};

export default CountdownDumb;
