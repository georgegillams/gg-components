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

/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Section from '../Typography';
import {
  ButtonSkeleton,
  CardSkeleton,
  CheckboxSkeleton,
  CompactCardSkeleton,
  InputSkeleton,
  NotificationSkeleton,
  ProgressSkeleton,
  SectionSkeleton,
  SmallButtonSkeleton,
  SmallProgressSkeleton,
  SubSectionSkeleton,
  TextLinkSkeleton,
  TicketStatusSkeleton,
} from './index';

storiesOf('Skeletons', module)
  .add('ButtonSkeleton', () => <ButtonSkeleton />)
  .add('CardSkeleton', () => <CardSkeleton />)
  .add('CheckboxSkeleton', () => <CheckboxSkeleton />)
  .add('CompactCardSkeleton', () => <CompactCardSkeleton />)
  .add('InputSkeleton', () => <InputSkeleton />)
  .add('NotificationSkeleton', () => <NotificationSkeleton />)
  .add('ProgressSkeleton', () => <ProgressSkeleton />)
  .add('SectionSkeleton', () => <SectionSkeleton />)
  .add('SmallButtonSkeleton', () => <SmallButtonSkeleton />)
  .add('SmallProgressSkeleton', () => <SmallProgressSkeleton />)
  .add('SubSectionSkeleton', () => <SubSectionSkeleton />)
  .add('TextLinkSkeleton', () => <TextLinkSkeleton />)
  .add('TicketStatusSkeleton', () => <TicketStatusSkeleton />)
  .add('Combination', () => (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <ButtonSkeleton />
      <CardSkeleton />
      <CheckboxSkeleton />
      <CompactCardSkeleton style={{ marginLeft: '15rem' }} />
      <CompactCardSkeleton style={{ marginLeft: '30rem' }} />
      <CompactCardSkeleton style={{ marginLeft: '45rem' }} />
    </div>
  ));
