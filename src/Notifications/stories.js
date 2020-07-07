import React from 'react';
import { storiesOf } from '@storybook/react';

import { NotificationComp, NOTIFICATION_TYPES } from './index';

storiesOf('Notifications', module)
  .add('NotificationComp - link', () => (
    <NotificationComp type="success">{`Hi. Here\'s a [link](/test)`}</NotificationComp>
  ))
  .add('NotificationComp - extenal link', () => (
    <NotificationComp
      type={NOTIFICATION_TYPES.success}
    >{`Hi. Here\'s a [link](https://www.google.com/)`}</NotificationComp>
  ))
  .add('NotificationComp - extenal link - warning', () => (
    <NotificationComp
      type={NOTIFICATION_TYPES.warn}
    >{`Hi. Here\'s a [link](https://www.google.com/)`}</NotificationComp>
  ))
  .add('NotificationComp - extenal link - error', () => (
    <NotificationComp
      type={NOTIFICATION_TYPES.error}
    >{`Hi. Here\'s a [link](https://www.google.com/)`}</NotificationComp>
  ))
  .add('NotificationComp - extenal link - neutral', () => (
    <NotificationComp
      type={NOTIFICATION_TYPES.neutral}
    >{`Hi. Here\'s a [link](https://www.google.com/)`}</NotificationComp>
  ));
