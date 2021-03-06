import React from 'react';
import { storiesOf } from '@storybook/react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './stories.scss';

import { Countdown, CountdownDumb, DISPLAY_TYPES } from './index';

const getClassName = cssModules(STYLES);

export default { title: 'Countdown dumb', component: CountdownDumb };

export const DefaultTomorrow = () => <CountdownDumb millis={86387125} />;
export const DefaultOneWeek = () => <CountdownDumb millis={604766461} />;
export const DefaultOneWeekDayOnly = () => (
  <CountdownDumb display={DISPLAY_TYPES.daysOnly} millis={604766461} />
);
export const DefaultOneWeekAgo = () => <CountdownDumb millis={-604842403} />;
export const DefaultColoured = () => (
  <CountdownDumb
    textClassName={getClassName('stories__text')}
    millis={604842403}
  />
);
export const CompleteMessageOneWeekAgo = () => (
  <CountdownDumb millis={-604842403} completeMessage="Timer finished!" />
);
export const PausedOneWeekAgo = () => (
  <CountdownDumb millis={-604766461} paused />
);
export const PausedOneWeek = () => <CountdownDumb millis={604766461} paused />;
export const PausedOneWeekColoured = () => (
  <CountdownDumb
    textClassName={getClassName('stories__text')}
    millis={604766461}
    paused
  />
);

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const oneWeek = new Date();
oneWeek.setDate(oneWeek.getDate() + 7);

const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

storiesOf('Countdown', module)
  .add('Default - tomorrow', () => (
    <Countdown toUTCTimestamp={tomorrow.getTime()} />
  ))
  .add('Default - oneWeek', () => (
    <Countdown toUTCTimestamp={oneWeek.getTime()} />
  ))
  .add('Default - oneWeekAgo', () => (
    <Countdown toUTCTimestamp={oneWeekAgo.getTime()} />
  ))
  .add('CompleteMessage - oneWeekAgo', () => (
    <Countdown
      toUTCTimestamp={oneWeekAgo.getTime()}
      completeMessage="Time finished!"
    />
  ));
