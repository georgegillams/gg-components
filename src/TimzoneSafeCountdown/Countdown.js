import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import prefersReducedMotion, {
  motionPreferences,
} from '@magica11y/prefers-reduced-motion';

import CountdownDumb from './CountdownDumb';

const Countdown = props => {
  const [paused, setPaused] = useState(false);

  // this is used to force re-renders so that the time updates
  // eslint-disable-next-line no-unused-vars
  const [lastUpdated, setLastUpdated] = useState(0);

  // the second empty-array argument means this will only be done once, on mount
  useEffect(() => {
    setPaused(prefersReducedMotion === motionPreferences.REDUCE);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date().getTime());
    }, 500);

    const cleanUp = () => {
      clearInterval(interval);
    };
    return cleanUp;
  });

  const { toUTCTimestamp, ...rest } = props;

  const now = new Date();
  const msDiff = toUTCTimestamp - now.getTime();

  return (
    <CountdownDumb
      paused={paused}
      onPauseChanged={newValue => {
        setPaused(newValue);
      }}
      millis={msDiff}
      {...rest}
    />
  );
};

Countdown.propTypes = {
  toUTCTimestamp: PropTypes.string.isRequired,
};
export default Countdown;
