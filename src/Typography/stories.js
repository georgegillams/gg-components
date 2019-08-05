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

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ArticleDate, Quote, Section, SubSection, TextLink } from './index';

storiesOf('Quote', module).add('default', () => (
  <Quote>Lorem ipse dolor sit amet.</Quote>
));
storiesOf('Section', module)
  .add('default', () => <Section name="Test" />)
  .add('With anchor', () => <Section anchor name="Test" />)
  .add('no padding', () => <Section anchor noPadding name="Test" />);
storiesOf('SubSection', module)
  .add('default', () => <SubSection name="Test" />)
  .add('Without anchor', () => <SubSection name="Test" anchor={false} />)
  .add('no padding', () => <SubSection noPadding name="Test" />);
storiesOf('TextLink', module)
  .add('default', () => (
    <TextLink href="/lol" name="Test">
      Test
    </TextLink>
  ))
  .add('external', () => (
    <TextLink external href="/lol" name="Test">
      Test
    </TextLink>
  ));
storiesOf('ArticleDate', module).add('default', () => (
  <ArticleDate date={new Date()} />
));
