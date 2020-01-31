/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Countdown, CountdownDumb } from './index';

storiesOf('Countdown dumb', module)
  .add('Default - tomorrow', () => <CountdownDumb millis={86387125} />)
  .add('Default - oneWeek', () => <CountdownDumb millis={604766461} />)
  .add('Default - oneWeekAgo', () => <CountdownDumb millis={-604842403} />)
  .add('CompleteMessage - oneWeekAgo', () => (
    <CountdownDumb millis={-604842403} completeMessage="Time finished!" />
  ));

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
