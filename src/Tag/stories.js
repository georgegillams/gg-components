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

import { Tag, TagFilter, TAG_TYPES } from './index';

storiesOf('Tag filter', module).add('Default', () => (
  <TagFilter selectedTags={[]} />
));

storiesOf('Tags', module)
  .add('Tech', () => <Tag type={TAG_TYPES.tech}>A tech tag</Tag>)
  .add('Travel', () => <Tag type={TAG_TYPES.travel}>A travel tag</Tag>)
  .add('Photography', () => (
    <Tag type={TAG_TYPES.photography}>A photography tag</Tag>
  ))
  .add('Events', () => <Tag type={TAG_TYPES.events}>A events tag</Tag>)
  .add('Security', () => <Tag type={TAG_TYPES.security}>A security tag</Tag>);
